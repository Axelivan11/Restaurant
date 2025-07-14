import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as nodemailer from 'nodemailer';
import { usersDto } from 'src/users/dto/user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

interface PendingUser {
  data: usersDto;
  code: string;
  expiresAt: number;
}
@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private usersService: UsersService, 
        private jwtService: JwtService) { }

        private pendingUsers = new Map<string, PendingUser>();

    async validateUser(email: string, password: string): Promise<Users> {
        const user = await this.usersService.findOne(email);
        const isPasswordValid = await bcrypt.compare(password, user.Password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales incorrectas, por favor intenta nuevamente.');
        }
        return user;
    }

    async login(user: any) {
        const payload = {
            id: user.id,
            username: user.Username,
            email: user.Email,
            name: user.Name,
            lastname: user.Lastname,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    private async sendEmail(to: string, code: string) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'restaurantdokka@gmail.com',
                pass: 'utyy zhah kuau tyxo',
            },
        });

        const mailOptions = {
            from: 'restaurantdokka@gmail.com',
            to,
            subject: 'Código de verificación',
            html: `<h3>Tu código de verificación es:</h3><p style="font-size: 24px;">${code}</p>`,
        };

        await transporter.sendMail(mailOptions);
    }

    async sendVerificationCode(userDto: usersDto) {
        const { email, username } = userDto;

        // Verifica si el usuario ya existe
        const existingEmail = await this.userRepository.findOne({ where: { Email: email } });
        const existingUsername = await this.userRepository.findOne({ where: { Username: username } })
        
        if (existingEmail) {
            throw new BadRequestException('Email ya está registrado, por favor intenta nuevamente.');
        }
        else if (existingUsername) {
            throw new BadRequestException('Username ya está registrado, por favor intenta nuevamente.');
        }

        // Crea código de verificación y tiempo límite
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = Date.now() + 3 * 60 * 1000;

        // Guarda temporalmente los datos
        this.pendingUsers.set(email, { data: userDto, code, expiresAt });

        // Enviar correo
        await this.sendEmail(email, code);
        

        return { message: 'Código enviado al correo.' };
    }

    async verifyCodeAndCreateUser(email: string, code: string) {
        const entry = this.pendingUsers.get(email);
        if (!entry) {
            throw new UnauthorizedException('Código expirado o inválido.');
        }

        // Expiración
        if (Date.now() > entry.expiresAt) {
            this.pendingUsers.delete(email);
            throw new UnauthorizedException('El código ha expirado.');
        }

        // Validación del código
        if (entry.code !== code) {
            throw new UnauthorizedException('Código incorrecto.');
        }

        // Crear usuario en base de datos
        const createdUser = await this.usersService.create(entry.data);
        this.pendingUsers.delete(email);

        return { message: 'Usuario creado con éxito.', user: createdUser };
    }

 
}
    


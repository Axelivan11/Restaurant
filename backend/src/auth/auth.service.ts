import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/users/entity/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<Users> {
        const user = await this.usersService.findOne(email);
        const isPasswordValid = await bcrypt.compare(password, user.Password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
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
}

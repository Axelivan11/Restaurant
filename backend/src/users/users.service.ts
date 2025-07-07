import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { usersDto } from './dto/user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async create(UserData:usersDto): Promise<Users> {
    const {name, lastname, username, email, password} = UserData;

    const salt = await bcrypt.genSalt()
    const hashedPasword = await bcrypt.hash(password, salt)
    const user = this.userRepository.create({
      Name:name,
      Lastname:lastname,
      Username: username,
      Email: email,
      Password:hashedPasword,
    });


    const newUser = await this.userRepository.save(user);
    return newUser;
  }

   async findOne(id: number): Promise<Users> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}

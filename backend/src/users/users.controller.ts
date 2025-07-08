import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { usersDto } from './dto/user.dto';
import { get } from 'http';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() userData: usersDto): Promise<Users> {
        return this.usersService.create(userData);
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Users> {
        return await this.usersService.findOnebyId(id);
    }
}

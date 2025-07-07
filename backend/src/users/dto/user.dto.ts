// user.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class usersDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

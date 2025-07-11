import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/users/entity/users.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<Users> {
    const user = await this.authService.validateUser( email, password );

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
    id: user.id,
    Username: user.Username,
    Email: user.Email,
    Name: user.Name,
    Lastname: user.Lastname,
    Password: ""
  };
  }
}

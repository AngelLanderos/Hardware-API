import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

  login(loginDto: LoginDto) {
    return 'This action validate user';
  }

  logout() {
    return `This action logout`;
  }

  refresh() {
    return `This action refresh`;
  }

}

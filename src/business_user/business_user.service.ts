import { Injectable } from '@nestjs/common';
import { CreateBusinessUserDto } from './dto/create-business_user.dto';
import { UpdateBusinessUserDto } from './dto/update-business_user.dto';

@Injectable()
export class BusinessUserService {
  create(createBusinessUserDto: CreateBusinessUserDto) {
    return 'This action adds a new businessUser';
  }

  findAll() {
    return `This action returns all businessUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessUser`;
  }

  update(id: number, updateBusinessUserDto: UpdateBusinessUserDto) {
    return `This action updates a #${id} businessUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessUser`;
  }
}

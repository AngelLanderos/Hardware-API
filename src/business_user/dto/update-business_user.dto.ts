import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessUserDto } from './create-business_user.dto';

export class UpdateBusinessUserDto extends PartialType(CreateBusinessUserDto) {}

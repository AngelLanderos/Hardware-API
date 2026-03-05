import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessUserService } from './business_user.service';
import { CreateBusinessUserDto } from './dto/create-business_user.dto';
import { UpdateBusinessUserDto } from './dto/update-business_user.dto';

@Controller('business-user')
export class BusinessUserController {
  constructor(private readonly businessUserService: BusinessUserService) {}

  @Post()
  create(@Body() createBusinessUserDto: CreateBusinessUserDto) {
    return this.businessUserService.create(createBusinessUserDto);
  }

  @Get()
  findAll() {
    return this.businessUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessUserDto: UpdateBusinessUserDto) {
    return this.businessUserService.update(+id, updateBusinessUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessUserService.remove(+id);
  }
}

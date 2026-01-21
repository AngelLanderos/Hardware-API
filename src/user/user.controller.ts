import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  };

  @Get()
  findAll() {
    return this.userService.findAll();
  };

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  };

  //Full replacement
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
    return this.userService.update(+id, updateUserDto);
  };

  //Part update
  @Patch(':id')
  assignRole(@Param('id') id: string, @Body() roleId: string) {
    return this.userService.assignRole(+id, roleId);
  };

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  };

}

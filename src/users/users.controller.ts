// src/users/users.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    console.log("user controller findAll");
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {

    console.log("user controller findone");
        return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    console.log("create");
    console.log(user);
    return this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    console.log("update");
    console.log(user);
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(+id);
  }
}

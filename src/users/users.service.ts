// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    console.log("user service findAll");
    const user = await this.usersRepository.find();
    console.log(user);
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    //const user = await this.usersRepository.findOne({ UserID: id });

    console.log("user service findone1", id);
    const user = await this.usersRepository.findOne({
      where: { username: 'john_doe' },
    });
    console.log(user);
    return user;
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOne({ where: { userID: id } });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

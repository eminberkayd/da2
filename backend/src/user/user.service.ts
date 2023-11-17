import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities';
import { db } from 'src/database';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository = db.getRepository(User)
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);
    return await this.userRepository.save(user);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

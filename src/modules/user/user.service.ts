import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './userDto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }

  /**
  * 获取用户
  */
  async getUserList() {
    // const userList = await this.usersRepository.find();
    // console.log(userList)
    return [];
  }

  /**
  * 创建用户
  */
  async createUser(dto: CreateUserDto): Promise<User> {
    // first user already exist or not
    const isUser = await this.usersRepository.find({
      where: { account: dto.account}
    });
    if(isUser){
      return null
    }
    const user = new User();
    user.name = dto.name;
    user.account = dto.account;
    return user;
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generics.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService  extends GenericService<User,UpdateUserDto,CreateUserDto>{
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>) {
			super(usersRepository);
	}
  }
  
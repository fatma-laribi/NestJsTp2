/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { UserService } from './user.service';
import { ControllerFactory } from 'src/generics/generics.controller';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController  extends ControllerFactory<User,UpdateUserDto,CreateUserDto>(UpdateUserDto,CreateUserDto){

	constructor(private readonly userService: UserService) {
		super(userService);}}

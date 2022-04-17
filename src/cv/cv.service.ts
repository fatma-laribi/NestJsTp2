/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generics.service';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvService  extends GenericService<Cv,UpdateCvDto,CreateCvDto>{
	constructor(
		@InjectRepository(Cv)
		private readonly cvRepository: Repository<Cv>) {
			super(cvRepository);
	}
  }
  
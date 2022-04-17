/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generics.service';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService  extends GenericService<Skill,UpdateSkillDto,CreateSkillDto>{
	constructor(
		@InjectRepository(Skill)
		private readonly skillRepository: Repository<Skill>) {
			super(skillRepository);
	}
  }
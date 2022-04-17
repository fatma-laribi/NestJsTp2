/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { SkillService } from './skill.service';
import { ControllerFactory } from 'src/generics/generics.controller';
import { Skill } from './entities/skill.entity';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';

@Controller('skill')

export class SkillController  extends ControllerFactory<Skill,UpdateSkillDto,CreateSkillDto>(UpdateSkillDto,CreateSkillDto){

	constructor(private readonly skillService: SkillService) {
		super(skillService);}}
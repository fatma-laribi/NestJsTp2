/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { CvService } from './cv.service';
import { ControllerFactory} from 'src/generics/generics.controller';
import { Cv } from './entities/cv.entity';
import { UpdateCvDto } from './dto/update-cv.dto';
import { CreateCvDto } from './dto/create-cv.dto';

@Controller('cv')
export class CvController  extends ControllerFactory<Cv,UpdateCvDto,CreateCvDto>(UpdateCvDto,CreateCvDto){

	constructor(private readonly cvService: CvService) {
		super(cvService);}

}

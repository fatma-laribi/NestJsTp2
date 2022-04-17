/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { TodoStatusEnum } from 'src/todo/enums/todo-status.enum';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
    constructor(private statsService: StatsService) {}
    @Get('status')
    getTodoNumber(){
        return this.statsService.getTodoNumber();
    }
    @Get('date')
    getTodosByDates(@Query("dateDebut") dateDebut:Date,@Query("dateFin") dateFin:Date){
        return this.statsService.getTodosByDates(dateDebut,dateFin);
    }
}

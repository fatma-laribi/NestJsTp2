/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { totalmem } from 'os';
import { TodoEntity } from 'src/todo/Entity/todo.entity';
import { TodoStatusEnum } from 'src/todo/enums/todo-status.enum';
import { Between } from 'typeorm';

@Injectable()
export class StatsService {
    constructor(
    @InjectRepository(TodoEntity)
    private todoRepository){}
   async getTodoNumber(){
        const todos=[];
        for (const key in TodoStatusEnum) {
            const [result, total] = await this.todoRepository.findAndCount({status: TodoStatusEnum[key]});
           todos.push(`status: ${TodoStatusEnum[key]}`);
            todos.push(total);
           
          }
          
        return todos;
    
      

    }
    getTodosByDates(dateDebut:Date,dateFin:Date){
        const todos= this.todoRepository.find({createdAt: Between(dateDebut,dateFin)});
        return todos;
    }
}

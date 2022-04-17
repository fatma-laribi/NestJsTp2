/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Brackets, Like, Repository } from "typeorm";
import { TodoEntity } from './Entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTodoDto } from './update-todo.dto';
import { SearchTodoDto } from './dto/search-todo.dto';
import { GenericService } from 'src/generics/generics.service';
import { AddTodoDto } from './dto/add-todo.dto';
@Injectable()
export class TodoService extends GenericService<TodoEntity,UpdateTodoDto,AddTodoDto>{
  
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>
  ) { super(todoRepository)}


  findAll(searchTodoDto: SearchTodoDto): Promise<TodoEntity[]> {
    const criterias = [];
    if (searchTodoDto.status) {
      criterias.push({ status: searchTodoDto.status });
    }
    if (searchTodoDto.criteria) {
      criterias.push({ name: Like(`%${searchTodoDto.criteria}%`) });
      criterias.push({ description: Like(`%${searchTodoDto.criteria}%`) });
    }
    if (criterias.length) {
      return this.todoRepository.find({ withDeleted: true, where: criterias });
    }
    return this.todoRepository.find({ withDeleted: true});
  }
  findAll2(searchTodoDto: SearchTodoDto) : Promise<TodoEntity[]>{
    const queryBuilder = this.todoRepository.createQueryBuilder("todo");
   
    if(searchTodoDto.status){
      queryBuilder.where("todo.status = :status",{status:searchTodoDto.status}) ;
      if(searchTodoDto.criteria){
        queryBuilder.andWhere(new Brackets(
          qb => qb.where("todo.name= :name",{name:searchTodoDto.criteria}).orWhere("todo.description= :description",{description:searchTodoDto.criteria})
        ));
        }
    }
    else if(searchTodoDto.criteria){
      queryBuilder.andWhere(new Brackets(
        qb => qb.where("todo.name= :name",{name:searchTodoDto.criteria}).orWhere("todo.description= :description",{description:searchTodoDto.criteria})
      ));
    }
    return queryBuilder.getMany();

  }
 
}


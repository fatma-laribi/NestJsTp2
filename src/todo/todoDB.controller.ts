/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Query} from "@nestjs/common";
import { Todo } from './Model/todo.model';
import { TodoService } from './todo.service';
import { TodoEntity } from './Entity/todo.entity';
import { UpdateTodoDto } from './update-todo.dto';
import { SearchTodoDto } from "./dto/search-todo.dto";
import { AddTodoDto } from "./dto/add-todo.dto";
import { ControllerFactory } from "src/generics/generics.controller";

@Controller({
  path: 'todo',
  version: '2',
})
export class TodoDBController extends ControllerFactory<TodoEntity,UpdateTodoDto,AddTodoDto>(UpdateTodoDto,AddTodoDto){
  constructor(private todoService: TodoService) {super(todoService);}
  @Get()
  getTodos(@Query() searchTodoDto: SearchTodoDto): Promise<TodoEntity[]> {
    return this.todoService.findAll2(searchTodoDto);
  }
  @Get('version')
  version() {
    return '2';
  }
  @Get('criteria1')
  findAll(searchTodoDto: SearchTodoDto): Promise<TodoEntity[]>{
    return this.todoService.findAll(searchTodoDto);
  }
  @Get('criteria2')
  findAll2(searchTodoDto: SearchTodoDto): Promise<TodoEntity[]>{
    return this.todoService.findAll2(searchTodoDto);
  }

}

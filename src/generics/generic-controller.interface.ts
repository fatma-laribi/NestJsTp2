/* eslint-disable prettier/prettier */
import { GenericEntity } from "./generics.entity";

export interface IGenericController<T extends GenericEntity, updateDto,createDto> {
    findAll(take,skip): Promise<T[]>;
    findById(id: string): Promise<T>;
    addEntity(entity:createDto): Promise<T>;
    delete(id: string);
    update(entity:updateDto,id:string): Promise<T>;
    softRestoreTodo(id: string);
    softDeleteTodo(id: string);
  }
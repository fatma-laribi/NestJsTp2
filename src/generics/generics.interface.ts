/* eslint-disable prettier/prettier */
import { DeepPartial } from "typeorm";

export interface IGenericService<T,updateDto,createDto> {
    
    getAll(take?:number, skip?:number);
    getOne(id: string): Promise<T>;
    updateEntity(entity: updateDto,id:string): Promise<T>;
    addEntity(entity: createDto): Promise<T>;
    delete(id: string);
    softDelete(id: string);
    softRestore(id: string);
}
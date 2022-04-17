/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException} from '@nestjs/common';
import { DeepPartial, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IGenericService } from '../generics/generics.interface';
import { GenericEntity } from './generics.entity';

@Injectable()
export class GenericService<T extends GenericEntity,updateDto,createDto> implements IGenericService<T,updateDto,createDto>{
	constructor(
    private readonly repository: Repository<T>) {}

    async getAll(take = 10, skip = 0){
        
        
        const [data, total] = await this.repository.findAndCount({ take, skip });
        return { data, total };
      }
      async addEntity(entity: createDto):Promise<T> {
        return await this.repository.save(entity as any);
      }
      async updateEntity(updateDto: updateDto,id:string):Promise<T>{
        const newEntity=await this.repository.preload({ id:(await this.repository.findOne(id)).id, ...updateDto } as any);
        if (newEntity) {
          return this.repository.save(newEntity as DeepPartial<T>);
        } else {
          throw new NotFoundException(`L'entité d'id ${id} n'existe pas `+newEntity+updateDto);
        }
      }
      
      async delete(id: string): Promise<DeleteResult> {
        const result = await this.repository.delete(id);
        if (result.affected) {
          return result;
        }
        throw new NotFoundException(`L'entité d'id ${id} n'existe pas `);
      }
      
      async softDelete(id: string): Promise<UpdateResult> {
        const result = await this.repository.softDelete(id);
        if (result.affected) {
          return result;
        }
        throw new NotFoundException(`L'entité d'id ${id} n'existe pas `);
      }
      
      async softRestore(id: string) {
        const result = await this.repository.restore(id);
        if (result.affected) {
          return result;
        }
        throw new NotFoundException(`L'entité d'id ${id} n'existe pas `);
      }
      async getOne(id:string){
      return await this.repository.findOne(id);
      }
  
}
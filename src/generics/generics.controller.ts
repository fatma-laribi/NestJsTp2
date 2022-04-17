/* eslint-disable prettier/prettier */
import { Get, Post, Delete,Body, Param, Query, Patch, Injectable, ValidationPipe, ValidationPipeOptions, Type, ArgumentMetadata, UsePipes} from '@nestjs/common';
import { IGenericService } from './generics.interface'
import { GenericEntity } from './generics.entity';
import { IGenericController } from './generic-controller.interface';

@Injectable()
export class AbstractValidationPipe extends ValidationPipe {
  constructor(
    options: ValidationPipeOptions,
    private readonly targetTypes: { body?: Type; query?: Type; param?: Type; }
  ) {
    super(options);
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    const targetType = this.targetTypes[metadata.type];
    if (!targetType) {
      return super.transform(value, metadata);
    }
    return super.transform(value, { ...metadata, metatype: targetType });
  }
}

export function ControllerFactory<T extends GenericEntity, updateDto, createDto>(
  updateDto: Type<updateDto>,
  createDto: Type<createDto>
): Type<IGenericController<T, updateDto, createDto>> {
  const createPipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: createDto });
  const updatePipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: updateDto });

class GenericsController<T extends GenericEntity,updateDto,createDto> implements IGenericController<T, updateDto, createDto>{

	constructor(private readonly IGenericService: IGenericService<T,updateDto,createDto>) {}

	@Get()
	async findAll(@Query('take') take, @Query('skip')skip): Promise<T[]> {
	  return this.IGenericService.getAll(+take,+skip);
	}

	@Get(':id')
	
	async findById(@Param('id') id: string): Promise<T> {
	  return this.IGenericService.getOne(id);
	}

	@Post()
    @UsePipes(createPipe)
	async addEntity(@Body() entity:createDto): Promise<T> {
		return this.IGenericService.addEntity(entity);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
	  return this.IGenericService.delete(id);
	}

	@Patch(':id')
    @UsePipes(updatePipe)
	async update(@Body() entity:updateDto,@Param('id') id:string): Promise<T> {
	  return this.IGenericService.updateEntity(entity,id);
	}
    @Delete('/soft/:id')
    softDeleteTodo(@Param('id') id: string) {
    return this.IGenericService.softDelete(id);
  }
  @Patch('/soft/:id')
  softRestoreTodo(@Param('id') id: string){
    return this.IGenericService.softRestore(id);
  }

}
return GenericsController;}

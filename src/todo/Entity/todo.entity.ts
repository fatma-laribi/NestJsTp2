/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimestampEntity } from '../../generics/timestamp.entity';
import { GenericEntity } from 'src/generics/generics.entity';

@Entity('todo')
export class TodoEntity extends TimestampEntity{

  @Column({})
  name: string;
  @Column({})
  description: string;

  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}

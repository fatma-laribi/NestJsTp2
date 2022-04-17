/* eslint-disable prettier/prettier */
import { CreateDateColumn, DeleteDateColumn, VersionColumn } from 'typeorm';
import { GenericEntity } from './generics.entity';

export class TimestampEntity extends GenericEntity {
  @CreateDateColumn({
    update: false,
  })
  createdAt: Date;
  @CreateDateColumn({})
  updatedAt: Date;
  @DeleteDateColumn({})
  deletedAt: Date;
  @VersionColumn()
  version: number;
}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/todo/Entity/todo.entity';
import { TodoModule } from 'src/todo/todo.module';
import { TodoService } from '../todo/todo.service';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports:[TodoModule,TypeOrmModule.forFeature([TodoEntity])],
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule {}

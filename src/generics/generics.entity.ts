/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn } from 'typeorm';


export class GenericEntity {
    @PrimaryGeneratedColumn()
    public id: string;
}
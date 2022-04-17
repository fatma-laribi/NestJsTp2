/* eslint-disable prettier/prettier */
import { Cv } from "src/cv/entities/cv.entity";
import { TimestampEntity } from "src/generics/timestamp.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity("skill")
export class Skill extends TimestampEntity{
   
    @Column()
    designation:string;
    @ManyToMany(
        ()=>Cv
    )
    cvs:Cv[];
    
}

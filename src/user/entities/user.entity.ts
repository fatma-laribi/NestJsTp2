/* eslint-disable prettier/prettier */
import { IsEmail } from "class-validator";
import { CvService } from "src/cv/cv.service";
import { Cv } from "src/cv/entities/cv.entity";
import { TimestampEntity } from "src/generics/timestamp.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity("user")
export class User extends TimestampEntity{
 
    @Column()
    username:string;
    @Column()
    @IsEmail()
    email:string;

    @Column()
    password:string;
   @OneToMany(
       ()=>Cv,
       (cv:Cv)=>cv.id
   )
    cvs:Cv[];

}

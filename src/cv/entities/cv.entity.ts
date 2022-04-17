/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { identity } from "rxjs";
import { TimestampEntity } from "src/generics/timestamp.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity("cv")
export class Cv extends TimestampEntity{

@Column()
name:string;

@Column()
firstName:string;

@Column()
@Type(()=>Number)
@IsNumber()
age:number;

@Column()
@Type(()=>Number)
@IsNumber()
cin:number;

@Column()
job:string;

@Column()
path:string;

@ManyToMany(
    ()=>Skill
)
skills:Skill[];

@ManyToOne(

    ()=>User
)
user:User;
}

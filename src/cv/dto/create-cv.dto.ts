/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";


export class CreateCvDto{
@IsNotEmpty()
name:string;
@IsNotEmpty()
firstName:string;
@IsNotEmpty()
age:number;
@IsNotEmpty()
cin:number;
job:string;
path:string;
}

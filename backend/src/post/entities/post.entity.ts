import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    constructor(){

    }
    
    @PrimaryGeneratedColumn()
    id: number


}

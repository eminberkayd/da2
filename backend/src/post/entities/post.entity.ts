import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne } from "typeorm";
import { CreatePostDto } from "../dto";
import { User } from "src/user";

@Entity()
export class Post {
    constructor({text}: CreatePostDto){

    }

    @PrimaryGeneratedColumn()
    id: number


    @Column({
        type: "text"
    })
    text_content: string;

    @Column()
    image_url: string;

    @OneToOne(() => User)
    user_id: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    updated_at: Date;
}

import { Post } from "src/post";
import { User } from "src/user";
import { Entity, PrimaryGeneratedColumn, OneToOne, CreateDateColumn } from "typeorm";
/**
 * CREATE TABLE POST_LIKES (
  ID SERIAL PRIMARY KEY,
  USER_ID INT REFERENCES USERS(ID),
  POST_ID INT REFERENCES POSTS(ID),
  CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 */

@Entity({name: "post_likes"})
export class PostLike {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    user_id: number;

    @OneToOne(() => Post)
    post_id: number;

    @CreateDateColumn()
    created_at: Date
}
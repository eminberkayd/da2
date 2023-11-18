import { CommentDislike } from "src/dislike/entities/comment-dislike.entity";
import { CommentLike } from "src/like/entities/comment-like.entity";
import { Post } from "src/post/entities";
import { User } from "src/user/entities";
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    OneToOne,
    UpdateDateColumn,
    Column,
    OneToMany,
} from "typeorm";

@Entity({ name: "comments" })
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        nullable: false
    })
    content: string

    @ManyToOne(() => User)
    @JoinColumn({ name: "author_id" })
    author: User;

    @ManyToOne(() => Post)
    @JoinColumn({ name: "post_id" })
    post: Post;

    @OneToOne(() => Comment, comment => comment.parentComment)
    @JoinColumn({ name: "parent_comment_id" })
    parentComment: Comment

    @OneToMany(() => CommentLike, like => like.comment)
    likes: CommentLike[];

    @OneToMany(() => CommentDislike, dislike => dislike.comment)
    dislikes: CommentDislike[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
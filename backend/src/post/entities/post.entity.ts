import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { User } from 'src/user/entities';
import { Comment } from 'src/comment';
import { PostLike } from 'src/like/entities/post-like.entity';
import { PostDislike } from 'src/dislike/entities/post-dislike.entity';

@Entity({ name: "posts" })
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        nullable: false
    })
    content: string;

    @Column({
        nullable: true
    })
    image_url: string;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[];

    @OneToMany(() => PostLike, postLike => postLike.post)
    likes: PostLike[];

    @OneToMany(() => PostDislike, postDislike => postDislike.post)
    dislikes: PostDislike[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
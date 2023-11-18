import { Post } from 'src/post/entities';
import { User } from 'src/user/entities';
import {
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Entity,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity({ name: 'post_dislikes' })
export class PostDislike extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.postDislikes)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Post, (post) => post.dislikes)
    @JoinColumn({ name: 'post_id' })
    post: Post;

    @CreateDateColumn()
    created_at: Date;
}

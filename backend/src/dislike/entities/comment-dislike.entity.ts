import { Comment } from 'src/comment';
import { User } from 'src/user/entities';
import {
    BaseEntity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Entity,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('comment_dislikes')
export class CommentDislike extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.commentDislikes)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Comment, (comment) => comment.dislikes)
    @JoinColumn({ name: 'comment_id' })
    comment: Comment;

    @CreateDateColumn()
    created_at: Date;
}
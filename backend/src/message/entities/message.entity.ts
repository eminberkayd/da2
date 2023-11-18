import { User } from 'src/user/entities';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
} from 'typeorm';

@Entity({ name: 'messages' })
export class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'sender_id' })
    sender: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'receiver_id' })
    receiver: User;

    @Column({
        type: 'text',
        nullable: false
    })
    message_content: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

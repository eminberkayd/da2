import { User } from 'src/user/entities';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'follows' })
export class Follow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'follower_id' })
  follower: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'followee_id' })
  followee: User;

  @CreateDateColumn()
  created_at: Date;
}

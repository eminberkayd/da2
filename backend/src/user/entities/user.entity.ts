import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profile_photo: string;

    @Column({ length: 255 })
    biography: string;

    @Column()
    timezone: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    updated_at: Date;
}

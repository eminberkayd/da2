import { Entity, Column, BaseEntity, BeforeInsert, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import * as bcrpyt from "bcrypt";
import { CreateUserDto } from "../dto";

@Entity('user')
export class User extends BaseEntity {

    constructor(createUserDto: CreateUserDto){
        super();
        this.username = createUserDto.userName;
        this.fullname = createUserDto.fullName;
        this.email = createUserDto.email;
        this.password = createUserDto.password;
        this.profile_photo = createUserDto.profilePhotoUrl;
        this.timezone = createUserDto.timezone || "UTC";
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        length: 30,
        nullable: true
    })
    fullname: string | undefined;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        nullable: true
    })
    profile_photo: string | undefined;

    @Column({ length: 255 })
    biography: string;

    @Column({
        default: "UTC"
    })
    timezone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrpyt.hash(this.password, 10);
    }
}

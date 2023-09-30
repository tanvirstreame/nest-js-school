import { ChildEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Role from "../enums/role.enum";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    first_name: string;

    @Column({ type: "varchar", length: 20 })
    last_name: string;

    @Column({ type: "varchar", unique: true, length: 20 })
    email: string;

    @Column({ type: "varchar", length: 35 })
    phone: string;

    @Column({ type: "varchar", length: 35 })
    date_of_birth: string;

    @Column({ type: "varchar", length: 50 })
    address: string;

    @Column({ type: "varchar", length: 50 })
    course: string;

    @Column({ default: true })
    is_active: boolean;

    roles: Role[];

    @CreateDateColumn({ type: 'timestamp' })
    createDate: number;

    @UpdateDateColumn({ type: "timestamp" })
    updateDate: number;

  

}

@ChildEntity()

class Admin extends User {

}


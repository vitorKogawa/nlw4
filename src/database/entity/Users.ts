import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "varchar", length: "70" })
    name: string;

    @Column({ type: "varchar", length: "70" })
    email: string;

    @Column({ type: "boolean" })
    isEnabled: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

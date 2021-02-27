import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Surveys {
    @PrimaryColumn({ type: "uuid" })
    id: number;

    @Column({ type: "varchar", length: "70" })
    title: string;

    @Column({ type: "varchar", length: "70" })
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

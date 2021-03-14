import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Simulated } from './Simulated'

@Entity()
export class Administrator {

    @PrimaryColumn()
    cpf: string;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Simulated, simulated => simulated.administrator)
    simulateds: Simulated[];
}
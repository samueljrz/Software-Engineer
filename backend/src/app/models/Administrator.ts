import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany, BeforeUpdate, BeforeInsert } from 'typeorm';
import { Simulated } from './Simulated'
import { Question } from './Question'
import bcrypt from 'bcryptjs';

@Entity()
export class Administrator {

    @PrimaryColumn()
    cpf: string;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    created_at: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashSenha() {
        this.senha = bcrypt.hashSync(this.senha, 8);
    }

    @OneToMany(() => Simulated, simulated => simulated.administrator)
    simulateds: Simulated[];

    @OneToMany(() => Question, question => question.administrator)
    questions: Question[];
}
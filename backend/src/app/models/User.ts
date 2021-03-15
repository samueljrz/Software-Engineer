import { Entity, Column, PrimaryColumn, CreateDateColumn, ManyToMany, OneToMany, JoinTable, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Question } from "./Question";
import { Notebook } from './Notebook';
import { Simulated } from './Simulated';
import bcrypt from 'bcryptjs';
 
@Entity()
export class User {

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

    @ManyToMany(() => Question)
    @JoinTable()
    questions: Question[];


    @OneToMany(() => Notebook, notebook => notebook.user)
    notebooks: Notebook[];

    @OneToMany(() => Simulated, simulated => simulated.user)
    simulateds: Simulated[];

}
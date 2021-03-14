import { Entity, Column, PrimaryColumn, Generated, CreateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from "./User";
import { Question } from './Question'
import { Administrator } from './Administrator'

@Entity()
export class Simulated {

    @PrimaryColumn("uuid", {length: 20})
    @Generated('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    qtdquestion: number;

    @Column()
    time: number;

    @CreateDateColumn()
    created_at: Date;
    
    @ManyToMany(() => Question)
    @JoinTable()
    questions: Question[];

    //duvida 
    @ManyToOne(() => User, user => user.simulateds)
    user: User;

    @ManyToOne(() => Administrator, administrator => administrator.simulateds)
    administrator: Administrator;
}
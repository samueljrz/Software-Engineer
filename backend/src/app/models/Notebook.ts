import { Entity, Column, PrimaryColumn, Generated, CreateDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from "./User";
import { Question } from './Question'

@Entity()
export class Notebook {

    @PrimaryColumn("varchar", {length: 20})
    @Generated('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;
    
    @ManyToMany(() => Question)
    @JoinTable()
    questions: Question[];

    @ManyToOne(() => User, user => user.notebooks)
    user: User;
}
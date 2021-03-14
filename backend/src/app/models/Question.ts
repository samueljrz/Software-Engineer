import { Entity, Column, PrimaryColumn, Generated, CreateDateColumn, ManyToOne, JoinTable } from 'typeorm';
import { Administrator } from './Administrator'
@Entity()
export class Question {

    @PrimaryColumn("uuid", {length: 20})
    @Generated('uuid')
    id: string;

    @Column()
    disciplina: string;

    @Column()
    ano: number;

    @Column()
    nivel: string;

    @Column()
    instituicao: string;

    @Column()
    banca: string;

    @Column()
    conteudo: string;

    @Column()
    assertiva: boolean;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Administrator, administrator => administrator.questions)
    administrator: Administrator;

}
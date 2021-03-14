import { Entity, Column, PrimaryColumn, Generated, CreateDateColumn } from 'typeorm';

@Entity()
export class Question {

    @PrimaryColumn("varchar", {length: 20})
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

}
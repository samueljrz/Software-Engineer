import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Question1615685648470 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
          new Table({
            name: 'question',
            columns: [
              {
                name: 'id',
                type: 'varchar',
                isPrimary: true,
              },
              {
                name: 'disciplina',
                type: 'varchar',
              },
              {
                name: 'ano',
                type: 'int',
              },
              {
                name: 'nivel',
                type: 'varchar',
              },
              {
                name: 'instituicao',
                type: 'varchar',
              },
              {
                name: 'banca',
                type: 'varchar',
              },
              {
                name: 'conteudo',
                type: 'varchar',
              },
              {
                name: 'assertiva',
                type: 'boolean',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('question');
    }

}

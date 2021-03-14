import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Simulated1615741441851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'simulated',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'nome',
                type: 'varchar',
              },
              {
                name: 'qtdquestao',
                type: 'int',
              },
              {
                name: 'tempo',
                type: 'int',
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
        await queryRunner.dropTable('simulated');
    }
}

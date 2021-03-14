import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1615680229936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'user',
            columns: [
              {
                name: 'cpf',
                type: 'varchar',
                isPrimary: true,
              },
              {
                name: 'nome',
                type: 'varchar',
              },
              {
                name: 'telefone',
                type: 'varchar',
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
        await queryRunner.dropTable('user');
    }

}

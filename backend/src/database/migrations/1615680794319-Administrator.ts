import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Administrator1615680794319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'administrator',
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
                name: 'email',
                type: 'varchar',
              },
              {
                name: 'senha',
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
        await queryRunner.dropTable('administrator');
    }

}

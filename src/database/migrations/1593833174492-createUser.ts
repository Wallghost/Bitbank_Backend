import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1593833174492 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Users',
      columns: [
        {
          name: 'account_number',
          type: 'varchar',
          isPrimary: true,
        },
        {
          name: "name",
          type: 'varchar',
          isNullable: false
        },
        {
          name: "gender",
          type: 'varchar',
          isNullable: false
        },
        {
          name: "CPF",
          type: 'varchar',
          isNullable: false,
          isUnique: true,
        },
        {
          name: "password",
          type: 'varchar',
          isNullable: false,
        },
        {
          name: "avatar",
          type: 'varchar',
          isNullable: true
        },
        {
          name: "createdAt",
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: "updatedAt",
          type: 'varchar',
          default: 'now()'
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Users');
  }

}

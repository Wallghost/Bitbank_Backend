import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { query } from "express";

export class createAccounts1593914504882 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Accounts',
      columns: [
        {
          name: 'accountID',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'account_description',
          type: 'varchar',
          isNullable: false,
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Accounts');
  }

}


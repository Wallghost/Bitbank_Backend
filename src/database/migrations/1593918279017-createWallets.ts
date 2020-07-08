import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createWallets1593918279017 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(new Table({
      name: 'Wallets',
      columns: [
        {
          name: 'walletID',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'account_number',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'balance',
          type: "numeric(15,2)",
          isNullable: false,
          default: 0.00
        },
        {
          name: 'card_number',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'card_password',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'account_typeID',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'varchar',
          isNullable: false,
        }, {
          name: 'updatedAt',
          type: 'varchar',
          isNullable: false,
        },
      ],
      foreignKeys: [
        {
          columnNames: ['account_number'],
          referencedColumnNames: ['account_number'],
          referencedTableName: 'Users',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        {
          columnNames: ['account_typeID'],
          referencedColumnNames: ['accountID'],
          referencedTableName: 'Accounts',
        },
      ]
    }));

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Wallets');
  }

}

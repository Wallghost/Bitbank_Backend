import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { query } from "express";

export class createPayments1594176050650 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Payments',
      columns: [
        {
          name: 'paymentID',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: "uuid",
          default: 'uuid_generate_v4()'
        },
        {
          name: 'sender_account',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'destination_account',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'payment_created_date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'payment_date',
          type: 'timestamp',
          isNullable: false,
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Payments');
  }

}

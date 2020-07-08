import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTransfers1594173623122 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Transfers',
      columns: [
        {
          name: 'transferID',
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
          name: 'transfer_created_date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'transfer_payment_date',
          type: 'timestamp',
          isNullable: false,
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Transfers')
  }

}

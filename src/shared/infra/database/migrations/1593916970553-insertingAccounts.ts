import { MigrationInterface, QueryRunner } from "typeorm";

export class insertingAccounts1593916970553 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "Accounts" VALUES (1, 'Carteira Simples')`);
    await queryRunner.query(`INSERT INTO "Accounts" VALUES (2, 'Carteira Premium')`);
    await queryRunner.query(`INSERT INTO "Accounts" VALUES (3, 'Carteira Platinum')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('Truncate table "Accounts"');
  }

}

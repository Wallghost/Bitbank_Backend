import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Account')
class Account {
  @PrimaryColumn()
  accountID: number;

  @Column()
  account_description: string;

}

export default Account;

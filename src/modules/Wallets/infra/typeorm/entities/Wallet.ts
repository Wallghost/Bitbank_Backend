import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import User from '@modules/Users/infra/typeorm/entities/User';
import Account from '@modules/Accounts/infra/typeorm/entities/Account'

@Entity('Wallets')
class Wallet {
  @PrimaryGeneratedColumn('uuid')
  walletID: string;

  @Column()
  account_number: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'account_number' })
  account_owner: User;

  @Column()
  balance: number;

  @Column()
  card_number: string;

  @Column()
  card_password: string;

  @Column()
  account_typeID: number;

  @OneToOne(() => Account)
  @JoinColumn({ name: 'account_typeID' })
  account_type: Account;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default Wallet;

import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm'

@Entity('Users')
class User {
  @PrimaryColumn()
  account_number: string;

  @Column()
  name: string;

  @Column()
  CPF: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default User;

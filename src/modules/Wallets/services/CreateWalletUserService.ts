import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '@modules/Users/infra/typeorm/entities/User'
import Wallet from '@modules/Wallets/infra/typeorm/entities/Wallet'

interface Request {
  account_number: string;
  wallet_type: number;
}

class CreateWalletUserService {
  public async execute({ account_number, wallet_type }: Request): Promise<Wallet> {
    const userRepository = getRepository(User);
    const walletRepository = getRepository(Wallet);

    const checkUser = await userRepository.findOne({ where: { account_number } });

    if (!checkUser) {
      throw new Error('User does not exists');
    }

    const generatedCardNumber = Math.floor(Math.floor(Math.random() * (55 - 51)) + 51).toString() + Math.floor(Math.floor(Math.random() * (99999999999999 - 10000000000000)) + 10000000000000).toString();
    const createCardPassword = String(Math.floor(Math.random() * (9999 - 1000)) + 1000)
    const encryptedCardPassword = await hash(createCardPassword, 8)

    const createdWallet = walletRepository.create({
      account_number: account_number,
      balance: 0,
      card_number: generatedCardNumber,
      card_password: encryptedCardPassword,
      account_typeID: wallet_type
    });

    console.log(createdWallet)
    await walletRepository.save(createdWallet);

    return createdWallet;
  }
}

export default CreateWalletUserService

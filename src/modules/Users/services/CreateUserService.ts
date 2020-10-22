import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '@modules/Users/infra/typeorm/entities/User';

interface Request {
  name: string;
  CPF: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, CPF, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUser = await userRepository.findOne({
      where: {
        CPF
      }
    })

    if (checkUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(password, 8);

    const generatedAccountNumber = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    const accountDigit = Math.floor(Math.random() * 10);

    const user = userRepository.create({
      account_number: generatedAccountNumber.toString() + '-' + accountDigit.toString(),
      name,
      CPF,
      email,
      password: hashedPassword
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService

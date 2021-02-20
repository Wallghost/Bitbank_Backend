import { inject, injectable } from 'tsyringe';

import User from '@modules/Users/infra/typeorm/entities/User';
import UsersRepository from '../repositories/UsersRepository';
import HashProvider from '../providers/HashProvider/models/HashProvider';
import AppError from '@shared/errors/AppError';


interface Request {
  name: string;
  CPF: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepositories')
    private usersRepository: UsersRepository,

    @inject('HashProvider')
    private hashProvider: HashProvider
  ) { }

  public async execute({ name, CPF, email, password }: Request): Promise<User> {

    const checkUser = await this.usersRepository.findByCPF(CPF)

    if (checkUser) {
      throw new AppError('User already exists');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const generatedAccountNumber = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    const accountDigit = Math.floor(Math.random() * 10);

    const user = this.usersRepository.create({
      account_number: generatedAccountNumber.toString() + '-' + accountDigit.toString(),
      name,
      CPF,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService

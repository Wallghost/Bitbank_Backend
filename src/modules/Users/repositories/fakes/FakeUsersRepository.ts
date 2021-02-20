import UserRepositoriesModel from '../../repositories/UsersRepository';
import User from '../../infra/typeorm/entities/User'
import CreateUserDTO from '../../dtos/CreateUserDTO';

export default class UsersRepositories implements UserRepositoriesModel {
  private fakeUsersRepository: User[] = [];

  public async create(data: CreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(
      user,
      {
        account_number: Math.floor(Math.random() * (99999 - 10000)) + 10000
      },
      data
    )

    this.fakeUsersRepository.push(user);

    return user;
  }

  public async findByCPF(CPF: string): Promise<User | undefined> {
    const checkCPF = this.fakeUsersRepository.find(user => user.CPF === CPF);

    return checkCPF
  }
}

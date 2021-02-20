import { getRepository, Repository } from 'typeorm';
import UserRepositoriesModel from '../../../repositories/UsersRepository';
import User from '../entities/User'
import CreateUserDTO from '../../../dtos/CreateUserDTO';

export default class UsersRepositories implements UserRepositoriesModel {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: CreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async findByCPF(CPF: string): Promise<User | undefined> {
    const checkCPF = this.ormRepository.findOne({
      where: {
        CPF
      }
    })

    return checkCPF
  }
}

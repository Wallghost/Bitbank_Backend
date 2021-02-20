import User from '../infra/typeorm/entities/User'
import CreateUserDTO from '../dtos/CreateUserDTO';

export default interface UsersRepository {
  create(data: CreateUserDTO): Promise<User>
  findByCPF(CPF: string): Promise<User | undefined>
}

import { container } from 'tsyringe'

import IUserRepository from '@modules/Users/repositories/UsersRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository'

container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository);

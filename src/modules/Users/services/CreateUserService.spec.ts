import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUserService = new CreateUserService(
      fakeUsersRepository
    );
  });

  it('Should create a user', async () => {
    const user = await createUserService.execute({

      name: "Jonh Doe",
      email: "jonhdoe@email.com",
      CPF: "12345678900",
      password: '12345',
    })

    expect(user).toHaveProperty('account_number');
  })
})

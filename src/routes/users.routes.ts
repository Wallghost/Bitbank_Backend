import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

import CreateUserService from '../services/CreateUserService'

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  try {
    const { name, CPF, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, CPF, email, password });

    return response.json(user);
  } catch (e) {
    return response.json({ error: e.message })
  }
});

userRouter.get('/balance', async (request, response) => {
  const userRepository = getRepository(User);

  const user = userRepository.findOne()

  return response.json({});
});

export default userRouter;

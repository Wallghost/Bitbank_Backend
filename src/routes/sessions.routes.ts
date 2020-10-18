import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { account_number, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const user = await authenticateUser.execute({ account_number, password });

    return response.json(user);
  } catch (e) {
    return response.json({ error: e.message })
  }
});

export default sessionRouter;

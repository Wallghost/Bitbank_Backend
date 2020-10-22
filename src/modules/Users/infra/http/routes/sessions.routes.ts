import { Router } from 'express';

import CreateSessionService from '@modules/Users/services/CreateSessionService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { account_number, password } = request.body;

    const authenticateUser = new CreateSessionService();

    const user = await authenticateUser.execute({ account_number, password });

    return response.json(user);
  } catch (e) {
    return response.status(400).json({ error: e.message })
  }
});

export default sessionRouter;

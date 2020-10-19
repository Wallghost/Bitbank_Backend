import { Router } from 'express';

import authenticateUserMiddleware from '../middlewares/authenticateUserMiddleware'
import AuthenticateUserService from '../services/CreateSessionService';

const walletRouter = Router();

walletRouter.use(authenticateUserMiddleware);

walletRouter.get('/', async (request, response) => {
  try {
    const { account_number } = request.user;

    return response.json({  account_number });
  } catch (e) {
    return response.status(400).json({ error: e.message })
  }
});

export default walletRouter;

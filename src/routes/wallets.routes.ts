import { Router } from 'express';

import authenticateUserMiddleware from '../middlewares/authenticateUserMiddleware'
import CreateWalletUserService from '../services/CreateWalletUserService';

const walletRouter = Router();

walletRouter.use(authenticateUserMiddleware);

walletRouter.post('/create', async (request, response) => {
  try {
    const { account_number } = request.user;
    const { wallet_type } = request.body;

    const createWalletUserService = new CreateWalletUserService();

    const walletCreated = await createWalletUserService.execute({ account_number, wallet_type });

    return response.json(walletCreated);
  } catch (e) {
    return response.status(400).json({ error: e.message })
  }
});

export default walletRouter;

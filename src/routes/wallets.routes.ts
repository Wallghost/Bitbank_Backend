import { Router } from 'express';

import { getRepository } from 'typeorm';

import Wallet from '../models/Wallet';

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

walletRouter.get('/balance', async (request, response) => {
  try {
    const { account_number } = request.user;
    const walletRepository = getRepository(Wallet);

    const userWallet = await walletRepository.findOne({ where: { account_number } })

    return response.json({ balance: userWallet?.balance });
  } catch (e) {
    return response.status(400).json({ error: e.message });
  }
})

export default walletRouter;

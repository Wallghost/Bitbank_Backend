import { Router } from 'express';

import userRouter from './users.routes';
import sessionRouter from './sessions.routes';
import walletRouter from './wallets.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter)
routes.use('/wallets', walletRouter)

export default routes;

import { Router } from 'express';

import userRouter from '@modules/Users/infra/http/routes/users.routes';
import sessionRouter from '@modules/Users/infra/http/routes/sessions.routes';
import walletRouter from '@modules/Wallets/infra/http/routes/wallets.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter)
routes.use('/wallets', walletRouter)

export default routes;

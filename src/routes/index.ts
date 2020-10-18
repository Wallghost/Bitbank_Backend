import { Router } from 'express';

import userRouter from './users.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter)

export default routes;

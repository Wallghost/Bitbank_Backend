import { Router } from 'express';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const { name, email } = request.body;

  return response.json({ name, email });
});

export default userRouter;

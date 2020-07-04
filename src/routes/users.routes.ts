import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
    const user = {
        name: 'Miguel',
        email: "miguel@teste.com"
    }
    return response.json(user);
});

export default userRouter;
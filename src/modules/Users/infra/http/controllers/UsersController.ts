import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateUserService from '../../../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response) {
    try {
      const { name, CPF, email, password } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({ name, CPF, email, password });

      return response.json(user);
    } catch (e) {
      return response.status(400).json({ error: e.message })
    }
  }



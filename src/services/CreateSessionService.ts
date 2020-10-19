import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User'

import JWTConfig from '../config/JWTConfig'

interface Request {
  account_number: string;
  password: string
}

interface Response {
  user: User;
  token: string
}

class CreateSessionService {
  public async execute ({ account_number, password }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { account_number } });

    if(!user){
      throw new Error('Account Number or Password does not match');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new Error('Account Number or Password does not match');
    }

    const token = sign({}, JWTConfig.jwt.secret,{
      subject: user.account_number,
      expiresIn: JWTConfig.jwt.expiresIn
    })

    return {
      user,
      token
    }
  }
}

export default CreateSessionService;

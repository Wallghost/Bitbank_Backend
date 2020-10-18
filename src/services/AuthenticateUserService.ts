import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User'

interface Request {
  account_number: string;
  password: string
}

interface Response {
  user: User;
  token: string
}

class AuthenticateUserService {
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

    const token = sign({}, '38a7da83d4ce1d6f5a547c05e4481e95',{
      subject: user.account_number,
      expiresIn: '1d'
    })

    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService;

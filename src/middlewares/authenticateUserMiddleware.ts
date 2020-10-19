import { Response, Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import JWTConfig from '../config/JWTConfig'

interface TokenPayloadAttributes {
  iat: number;
  exp: number;
  sub: string;
}

export default function authenticateUserMiddleware ( request:Request, response: Response, next: NextFunction) {
  try{
    const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new Error('JWT token not provided');
  }

  const [type, token] = authHeader.split(' ');
  const tokenVerified = verify(token, JWTConfig.jwt.secret);

  const { sub } = tokenVerified as TokenPayloadAttributes;

  request.user = {
    account_number: sub,
  }

  return next();
  } catch (err) {
    throw new Error('Invalid JWT Token');
  }
}

import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth'

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authorization.split(' ');

  try{
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  }catch(err) {
    console.log(err);
    return res.sendStatus(401);
  }
} 
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth'

interface ITockenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.sendStatus(401);
  }

  const [, token] = authorization.split(' ');

  try{
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITockenPayload;

    req.user = {
      id: sub,
    };

    return next();
  }catch(err) {
    console.log(err);
    return res.sendStatus(401);
  }
} 
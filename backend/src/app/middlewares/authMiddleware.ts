import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth'

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try{
    const data = jwt.verify(token, authConfig.secret);
    
    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  }catch(err) {
    console.log(err);
    return res.sendStatus(401);
  }
} 
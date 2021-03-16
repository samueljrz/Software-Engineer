import { Request, Response } from 'express';
import { getRepository, Timestamp } from 'typeorm';
import { User } from '../models/User';
import authConfig from '@config/auth'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class SignInController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const user = await repository.findOne({ where: { email } });

    if(!user) {
      return res.status(401).json({ error: 'Email/Senha incorreta' });
    }
    
    const isValidPass = await bcrypt.compare(senha, user.senha)

    if(!isValidPass) {
      return res.status(401).json({ error: 'Email/Senha incorreta' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({}, secret, { 
      subject: user.cpf, 
      expiresIn 
    });

    delete user.senha;

    return res.json({
      user,
      token
    })
  }
}

export default new SignInController();
import { Request, Response } from 'express';
import { getRepository, Timestamp } from 'typeorm';
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class SignInController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, senha } = req.body;

    const user = await repository.findOne({ where: { email } });

    if(!user) {
      return res.sendStatus(401);
    }
    
    const isValidPass = await bcrypt.compare(senha, user.senha)

    if(!isValidPass) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id:user.cpf }, 'secret', { expiresIn: '1d' });

    delete user.senha;

    return res.json({
      user,
      token
    })
  }
}

export default new SignInController();
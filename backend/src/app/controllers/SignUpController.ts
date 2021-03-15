import { Request, Response } from 'express';
import { getRepository, Timestamp } from 'typeorm'
import { User } from '../models/User'

class SignUpController {
  index(req: Request, res: Response) {
    return res.send({ userID: req.userId });
  }
  
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { cpf, nome, telefone, email, senha } = req.body;

    const userExistsEmail = await repository.findOne({ where: { email } });
    const userExistsCpf = await repository.findOne({ where: { cpf } });

    if(userExistsEmail && userExistsCpf) {
      return res.sendStatus(409);
    }

    const user = repository.create({
      cpf,
      nome,
      telefone,
      email,
      senha,
    })
    await repository.save(user);

    return res.json(user);
  }
}

export default new SignUpController();
import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class SignUpController {
  index(req: Request, res: Response) {
    return res.send({ userID: req.user.id });
  }
  
  async store(req: Request, res: Response) {
      
    const repository = getRepository(User);

    const { cpf, firstName: nome, phoneNumber: telefone, email, password: senha } = req.body;

    const userExistsEmail = await repository.findOne({ where: { email } });
    const userExistsCpf = await repository.findOne({ where: { cpf } });

    if(!!userExistsEmail || !!userExistsCpf) {
      return res.status(409).json({ error: 'Email/Cpf já cadastrado' });
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
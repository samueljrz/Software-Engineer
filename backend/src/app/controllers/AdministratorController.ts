import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import { Administrator } from '../models/Administrator'

class SignUpController {
  async store(req: Request, res: Response) {
      
    const repository = getRepository(Administrator);

    const { cpf, nome, telefone, email, senha } = req.body;

     const userExistsEmail = await repository.findOne({ where: { email } });
     const userExistsCpf = await repository.findOne({ where: { cpf } });

    if(!!userExistsEmail || !!userExistsCpf) {
      return res.status(409).json({ error: 'Email/Cpf já cadastrado' });
    }

    const adm = repository.create({
      cpf,
      nome,
      telefone,
      email,
      senha,
    })  

    await repository.save(adm);

    return res.json(adm);
  }
}

export default new SignUpController();
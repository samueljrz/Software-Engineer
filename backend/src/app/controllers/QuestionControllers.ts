import { Request, Response } from 'express';
import { getRepository, Repository, Timestamp } from 'typeorm';
import { Question } from '../models/Question';

class QuestionController {
  
  async show(req: Request, res: Response) {

    const repository = getRepository(Question);

    const { page = 1} = req.params

    // console.log(page)

    const { disciplina, ano, nivel, instituicao, banca, conteudo = null, assertiva } = req.query
    
    const listQuestion = await repository.find({
      where: {
        disciplina: disciplina,
        ano: ano,
        conteudo: conteudo,
        banca: banca
      } 

    })

    console.log(listQuestion)

    return res.json(listQuestion);
  }

  async showDisciplina(req: Request, res: Response) {

    const repository = getRepository(Question);

    const { id : page = 1 } = req.params
    const limitItens = 5
    amount: Number

    // console.log(page)

    console.log(page) 

    const { disciplina } = req.query

    var listItens = await repository.findAndCount({
      where: {
        disciplina: disciplina
      }
      // skip: ,
      // take: 2
    })

    // let listQuestion = () => {
    //   let result = []
    //   let totalPage = Math.ceil( Array.from(listItens).length / limitItens )
    //   let count = ( ( page * limitItens ) - limitItens )
    //   let delimiter = count * limitItens

    //   if ( page <= totalPage ) {
    //     for (let i=count ; i<delimiter ; i++) {
    //       result.push(listItens[i])
    //       count++;
    //     }
    //   }
    //   return result
    // }
    
    // console.log(listQuestion)

    // return res.json(listQuestion);
  }

  async store(req: Request, res: Response) {
    
    const repository = getRepository(Question);

    const { disciplina, ano, nivel, instituicao, banca, conteudo, assertivaString } = req.body;
    
    var assertiva
      
    if ( assertivaString == 'V' ) assertiva = true  
    else assertiva = false

    const question = repository.create({
      disciplina,
      ano,
      nivel,
      instituicao,
      banca,
      conteudo,
      assertiva
    })

    repository.save(question)

    console.log(question)

    return res.json(question);
  }
}

export default new QuestionController();
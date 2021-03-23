import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import SignUpController from './app/controllers/SignUpController'
import SignInController from './app/controllers/SignInController'
import Administrator from './app/controllers/AdministratorController'

import QuestionController from './app/controllers/QuestionControllers'

const routes = Router();

routes.post('/signup', SignUpController.store)
routes.post('/administrator', Administrator.store)
routes.post('/signin', SignInController.authenticate)

routes.get('/question', QuestionController.show)
routes.get('/question/:id', QuestionController.showDisciplina)
routes.post('/question', QuestionController.store)

routes.use(authMiddleware);
routes.get('/index', SignUpController.index)
//rotas

export default routes;
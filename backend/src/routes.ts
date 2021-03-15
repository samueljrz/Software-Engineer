import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import SignUpController from './app/controllers/SignUpController'
import SignInController from './app/controllers/SignInController'

const routes = Router();

routes.post('/signup', SignUpController.store)
routes.post('/signin', SignInController.authenticate)

routes.use(authMiddleware);

//rotas

export default routes;
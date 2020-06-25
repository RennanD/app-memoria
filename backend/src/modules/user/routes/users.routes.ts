import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { body } = request;
  const createUser = new CreateUserService();

  const account = await createUser.execute(body);

  delete account.user.password;

  return response.json(account);
});

export default usersRouter;

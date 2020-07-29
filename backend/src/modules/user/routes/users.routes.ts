import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserSevice';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticate';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { body } = request;
  const createUser = new CreateUserService();

  const account = await createUser.execute(body);

  delete account.user.password;

  return response.json(account);
});

usersRouter.put('/', ensureAuthenticated, async (request, response) => {
  const updatedUser = new UpdateUserService();
  const { id } = request.user;

  const data = request.body;

  const user = await updatedUser.execute({ id, ...data });

  delete user.password;

  return response.json(user);
});

export default usersRouter;

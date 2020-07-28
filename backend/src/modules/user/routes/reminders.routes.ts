import { Router } from 'express';

import CreateRemindersService from '../services/CreateRemindersService';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticate';

const remindersRouter = Router();

remindersRouter.use(ensureAuthenticated);

remindersRouter.post('/', async (request, response) => {
  const data = request.body;
  const user_id = request.user.id;

  const createReminder = new CreateRemindersService();

  const reminder = await createReminder.execute({
    user_id,
    ...data,
  });

  return response.json(reminder);
});

export default remindersRouter;

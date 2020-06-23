import { Router } from 'express';

import CreateImportantDateService from '../services/CreateImportantDateService';
import ListUserDatesService from '../services/ListUserDatesService';
import ShowOnlyDateService from '../services/ShowOnlyDateService';

import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const datesRouter = Router();

datesRouter.use(ensureAuthenticated);

datesRouter.get('/:date_id', async (request, response) => {
  const showDate = new ShowOnlyDateService();

  const date_id = request.params.date_id as string;

  const user_id = request.user.id;

  const date = await showDate.execute({
    user_id,
    date_id,
  });

  return response.json(date);
});

datesRouter.get('/', async (request, response) => {
  const listDates = new ListUserDatesService();

  const { id } = request.user;

  const dates = await listDates.execute({
    user_id: id,
  });

  return response.json(dates);
});

datesRouter.post('/', async (request, response) => {
  const { contact_id, date, description } = request.body;

  const { id } = request.user;

  const createDate = new CreateImportantDateService();

  const importantDate = await createDate.execute({
    user_id: id,
    contact_id,
    date,
    description,
  });

  return response.json(importantDate);
});

export default datesRouter;

import { Router } from 'express';

import CreateImportantDateService from '../services/CreateImportantDateService';

import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const datesRouter = Router();

datesRouter.use(ensureAuthenticated);

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

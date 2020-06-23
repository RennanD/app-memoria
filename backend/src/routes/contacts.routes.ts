import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';
import ListContactDatesService from '../services/ListContactDatesService';

import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

contactsRouter.get('/:contact_id', async (request, response) => {
  const listDates = new ListContactDatesService();

  const contact_id = request.params.contact_id as string;

  const dates = await listDates.execute({
    contact_id,
  });

  return response.json(dates);
});

contactsRouter.post('/', async (request, response) => {
  const createContact = new CreateContactService();

  const { phone_number, name, ...rest } = request.body;

  const contact = await createContact.execute({
    name,
    phone_number,
    ...rest,
  });

  return response.json(contact);
});

export default contactsRouter;

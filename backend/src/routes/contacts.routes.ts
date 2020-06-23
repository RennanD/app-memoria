import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';

import ensureAuthenticated from '../middlewares/ensureAuthenticate';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

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

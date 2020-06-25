import { Router } from 'express';

import CreateContactService from '../services/CreateContactService';
import ListContactDatesService from '../services/ListContactDatesService';
import EditContactService from '../services/EditContactService';
import DeleteContactService from '../services/DeleteContactService';
import ListContactUserService from '../services/ListContactUserService';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticate';

const contactsRouter = Router();

contactsRouter.use(ensureAuthenticated);

contactsRouter.get('/', async (request, response) => {
  const listContacts = new ListContactUserService();

  const user_id = request.user.id;

  const contacts = await listContacts.execute({
    user_id,
  });

  return response.json(contacts);
});

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

  const user_id = request.user.id;

  const { phone_number, name, ...rest } = request.body;

  const contact = await createContact.execute({
    user_id,
    name,
    phone_number,
    ...rest,
  });

  return response.json(contact);
});

contactsRouter.put('/:contact_id', async (request, response) => {
  const contact_id = request.params.contact_id as string;

  const editContact = new EditContactService();

  const data = request.body;

  const contact = await editContact.execute({
    contact_id,
    ...data,
  });

  return response.json(contact);
});

contactsRouter.delete('/:contact_id', async (request, response) => {
  const contact_id = request.params.contact_id as string;

  const user_id = request.user.id;

  const deleteContact = new DeleteContactService();

  await deleteContact.execute({
    user_id,
    contact_id,
  });

  return response.send();
});

export default contactsRouter;

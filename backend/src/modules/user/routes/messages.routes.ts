import { Router } from 'express';

import CreateMessageService from '../services/CreateMessageService';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticate';

const messagesRouter = Router();

messagesRouter.use(ensureAuthenticated);

messagesRouter.post('/', async (request, response) => {
  const user_id = request.user.id;

  const { message_type, message_content } = request.body;

  const createMessage = new CreateMessageService();

  const message = await createMessage.execute({
    user_id,
    message_type,
    message_content,
  });

  return response.json(message);
});

export default messagesRouter;

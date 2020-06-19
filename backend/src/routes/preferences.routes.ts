import { Router } from 'express';

import CreatePreferencesService from '../services/CreatePreferencesService';

import ensureAuthenticate from '../middlewares/ensureAuthenticate';

const preferencesRouter = Router();

preferencesRouter.use(ensureAuthenticate);

preferencesRouter.post('/person/:id', async (request, response) => {
  const id = request.params.id as string;
  const { preferences: body_preferences } = request.body;

  const createPreferences = new CreatePreferencesService();

  const preferences = await createPreferences.execute({
    person_id: id,
    preferences: body_preferences,
  });

  return response.json(preferences);
});

export default preferencesRouter;

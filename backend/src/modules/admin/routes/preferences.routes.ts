import { Router } from 'express';
import controllUserAccess from '../../../middlewares/controllUserAccess';
import CreatePreferenceServices from '../services/CreatePreferenceService';

const preferencesRouter = Router();

preferencesRouter.use(controllUserAccess);

preferencesRouter.post('/', async (request, response) => {
  const { category } = request.body;

  const createPreference = new CreatePreferenceServices();

  const preference = await createPreference.execute(category);

  return response.json(preference);
});

export default preferencesRouter;

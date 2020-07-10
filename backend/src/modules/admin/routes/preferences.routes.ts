import { Router } from 'express';

import CreatePreferenceServices from '../services/CreatePreferenceService';
import CreateSubcategoriesService from '../services/CreateSubcategoriesService';

import controllUserAccess from '../../../middlewares/controllUserAccess';

const preferencesRouter = Router();

preferencesRouter.use(controllUserAccess);

preferencesRouter.post('/', async (request, response) => {
  const { category } = request.body;

  const createPreference = new CreatePreferenceServices();

  const preference = await createPreference.execute(category);

  return response.json(preference);
});

preferencesRouter.post(
  '/:category/subcategories',
  async (request, response) => {
    const { category } = request.params;

    const data = request.body;

    const createSubcategories = new CreateSubcategoriesService();

    const preference = await createSubcategories.execute({
      category,
      subcategories: data,
    });

    return response.json(preference);
  },
);

export default preferencesRouter;

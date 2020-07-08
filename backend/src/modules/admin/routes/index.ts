import { Router } from 'express';

import preferencesRouter from './preferences.routes';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticate';

const adminRoutes = Router();

adminRoutes.use(ensureAuthenticated);

adminRoutes.use('/preferences', preferencesRouter);

export default adminRoutes;

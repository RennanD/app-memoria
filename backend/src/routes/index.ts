import { Router } from 'express';

import phoneRouter from './phone.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import preferencesRouter from './preferences.routes';

const routes = Router();

routes.use('/phone', phoneRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/preferences', preferencesRouter);

export default routes;

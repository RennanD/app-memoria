import { Router } from 'express';

import phoneRouter from './phone.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/phone', phoneRouter);
routes.use('/users', usersRouter);

export default routes;

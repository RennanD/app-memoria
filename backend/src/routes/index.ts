import { Router } from 'express';

import phoneRouter from './phone.routes';

const routes = Router();

routes.use('/phone', phoneRouter);

export default routes;

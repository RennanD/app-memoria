import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import './database';

import routes from './routes';
import apprErrors from './middlewares/exceptionHandlers';

const app = express();

app.use(express.json());
app.use(routes);
app.use(apprErrors);

export default app;

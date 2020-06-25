import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import './database';

import apprErrors from './middlewares/exceptionHandlers';
import userRoutes from './modules/user/routes';

const app = express();

app.use(express.json());
app.use(apprErrors);
app.use(userRoutes);

export default app;

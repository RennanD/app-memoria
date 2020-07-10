import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import './database';
import './database/mongoConnect';

import appErrors from './middlewares/exceptionHandlers';
import userRoutes from './modules/user/routes';
import adminRoutes from './modules/admin/routes';

// import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use('/admin', adminRoutes);

app.use(appErrors);

export default app;

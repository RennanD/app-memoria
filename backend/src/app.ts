import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './database';
import './database/mongoConnect';

// import appErrors from './middlewares/exceptionHandlers';
import userRoutes from './modules/user/routes';
import adminRoutes from './modules/admin/routes';

import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use('/admin', adminRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;

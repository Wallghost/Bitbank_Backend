import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import routes from './routes'
import cors from 'cors';
import '@shared/infra/database'
import AppError from '@shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: 'error',
      message: error.message,
    })
  }

  return response.status(500).json({
    error: 'error',
    message: 'Internal Server Error'
  });
})

app.listen(3333, () => {
  console.log("Server Started");
});

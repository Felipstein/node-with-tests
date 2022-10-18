import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'dotenv/config';

import { UseCasesError } from './errors/UseCasesError';
import { route } from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(route);

app.use(
  (err: UseCasesError | Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof UseCasesError) {

      return res.status(err.statusCode).json({ message: err.message });
    }

    return res.status(500).json({ message: `Internavel server error - ${err.message}` });
  }
);

export { app };
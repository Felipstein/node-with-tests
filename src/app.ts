import express from 'express';

import { route } from './routes/user.routes';
import './config';

const app = express();

app.use(route);

export { app };
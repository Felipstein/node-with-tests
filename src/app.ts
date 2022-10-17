import express from 'express';

import { route } from './routes/routes.user';
import './config';

const app = express();

app.use(route);

export { app };
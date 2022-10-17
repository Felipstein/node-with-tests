import { Router } from "express";

const route = Router();

route.get('/users', (req, res) => {
  res.json({ message: 'Hello World!' });
});

export { route };
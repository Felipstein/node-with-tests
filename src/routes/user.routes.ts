import { UseCasesError } from './../errors/UseCasesError';
import { createUserFactory } from './../modules/Users/CreateUser/index';
import { Router } from "express";

const route = Router();

route.post('/users', (req, res) => {
  createUserFactory().handle(req, res);
});

export { route };
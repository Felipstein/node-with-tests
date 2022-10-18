import { Router } from "express";
import { createLessonFactory } from "../modules/Lessons/CreateLesson";

const route = Router();

route.post('/lessons', (req, res) => {
  return createLessonFactory().handle(req, res);
});

export { route };
import { CreateLessonController } from './CreateLessonController';
import { CreateLessonUseCases } from './CreateLessonUseCases';
import { PrismaLessonRepository } from './../../../repositories/prisma/PrismaLessonRepository';

export const createLessonFactory = () => {

  const lessonsRepository = new PrismaLessonRepository();
  const createLessonUseCases = new CreateLessonUseCases(lessonsRepository);
  const createLessonController = new CreateLessonController(createLessonUseCases);

  return createLessonController;
};
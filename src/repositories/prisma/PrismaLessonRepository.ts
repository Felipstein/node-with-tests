import { prisma } from '../../database/PrismaClient';
import { CreateLessonData, ILessonsRepository } from './../ILessonsRepository';

export class PrismaLessonRepository implements ILessonsRepository {

  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({
      data,
    });
  }

}
import { Lesson } from './../../entities/Lesson';
import { ILessonsRepository, CreateLessonData } from './../ILessonsRepository';

export class InMemoryLessonsRepository implements ILessonsRepository {

  private readonly lessons: Lesson[] = [];

  async findAll(): Promise<Lesson[]> {
    return this.lessons;
  }

  async create({ title, description }: CreateLessonData): Promise<void> {
    const lesson = new Lesson({ title, description });

    this.lessons.push(lesson);
  }

}
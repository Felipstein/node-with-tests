import { Lesson } from './../entities/Lesson';
export interface CreateLessonData {
  title: string;
  description?: string;
}

export interface ILessonsRepository {

  create(data: CreateLessonData): Promise<void>;

}
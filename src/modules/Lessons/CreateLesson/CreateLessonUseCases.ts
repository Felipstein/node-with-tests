import { UseCasesError } from './../../../errors/UseCasesError';
import { CreateLessonDTO } from './CreateLessonDTO';
import { ILessonsRepository } from './../../../repositories/ILessonsRepository';

export class CreateLessonUseCases {

  constructor(
    private lessonsRepository: ILessonsRepository,
  ) { }

  async execute({ title, description }: CreateLessonDTO): Promise<void> {

    if (!title) {
      throw new UseCasesError(400, 'Título é obrigatório.');
    }

    await this.lessonsRepository.create({ title, description });

  }

}
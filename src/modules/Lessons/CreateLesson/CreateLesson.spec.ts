import { InMemoryLessonsRepository } from './../../../repositories/in-memory/InMemoryLessonsRepository';
import { CreateLessonUseCases } from "./CreateLessonUseCases";

describe('CreateLesson Use Cases', () => {

  it('should be able to create a new lesson', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLessonUseCases = new CreateLessonUseCases(inMemoryLessonsRepository);

    await expect(createLessonUseCases.execute({ title: 'Lesson Test' }))
      .resolves
      .not
      .toThrow();

    await expect(inMemoryLessonsRepository.findAll()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Lesson Tesst',
        }),
      ])
    );
  });

  it('should not be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLessonUseCases = new CreateLessonUseCases(inMemoryLessonsRepository);

    await expect(createLessonUseCases.execute({ title: '' }))
      .rejects
      .toThrow();

    await expect(inMemoryLessonsRepository.findAll()).resolves.toEqual([]);
  });

});
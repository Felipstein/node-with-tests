import { uuid } from 'uuidv4';
export class Lesson {

  readonly id?: string;

  readonly title: string;
  readonly description?: string | null;

  constructor({ title, description }: Omit<Lesson, 'id'>, id?: string) {
    this.id = id ?? uuid();
    this.title = title;
    this.description = description ?? null;
  }

}
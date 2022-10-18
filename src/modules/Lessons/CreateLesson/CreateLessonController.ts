import { CreateLessonUseCases } from './CreateLessonUseCases';
import { Request, Response } from "express";

export class CreateLessonController {

  constructor(
    private createLessonUseCases: CreateLessonUseCases,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    await this.createLessonUseCases.execute({ title, description });

    return res.sendStatus(201);
  }

}
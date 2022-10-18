import { CreateUserController } from './CreateUserController';
import { CreateUserUseCases } from './CreateUserUseCases';
import { PrismaUserRepository } from './../../../repositories/prisma/PrismaUsersRepository';

export const createUserFactory = () => {

  const usersRepository = new PrismaUserRepository();
  const createUserUseCases = new CreateUserUseCases(usersRepository);
  const createUserController = new CreateUserController(createUserUseCases);

  return createUserController;
}
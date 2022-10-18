import { UseCasesError } from './../../../errors/UseCasesError';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { User } from '../../../entities/User';
import { CreateUserDTO } from './CreateUserDTO';
import { hash } from 'bcrypt';
import { prisma } from '../../../database/PrismaClient';
export class CreateUserUseCases {

  constructor(
    private usersRepository: IUsersRepository,
  ) { }

  async execute({ name, username, email, password }: CreateUserDTO): Promise<User> {
    if (!name) {
      throw new UseCasesError(400, 'Nome é obrigatório');
    }
    if (!email) {
      throw new UseCasesError(400, 'E-mail é obrigatório');
    }
    if (!password) {
      throw new UseCasesError(400, 'Senha é obrigatória');
    }

    const emailAlreadyExists = await this.usersRepository.emailExists(email);
    if (emailAlreadyExists) {
      throw new UseCasesError(400, 'E-mail já cadastrado.');
    }

    if (username) {
      const usernameAlreadyExists = await this.usersRepository.usernameExists(username);
      if (usernameAlreadyExists) {
        throw new UseCasesError(400, 'Nome de usuário já cadastrado.');
      }
    }

    const encryptedPassword = await hash(password, 8);

    const userCreate = new User({ name, username, email, password: encryptedPassword });
    const user = await prisma.user.create({
      data: userCreate,
    });

    return {
      ...user,
      username: user.username ?? undefined,
    };
  }

}
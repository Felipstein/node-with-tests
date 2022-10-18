import { prisma } from '../../database/PrismaClient';
import { User } from '../../entities/User';
import { IUsersRepository } from './../IUsersRepository';
export class PrismaUserRepository implements IUsersRepository {

  async create({ id, name, username, email, password }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        id, name, username, email, password,
      },
    });

    return {
      ...user,
      username: username ?? undefined,
    };
  }

  async usernameExists(username: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: { username },
    });

    return !!user;
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    return !!user;
  }

}
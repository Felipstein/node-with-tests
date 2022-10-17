import { User } from "@prisma/client";

export interface IUsersRepository {

  create(user: User): Promise<User>;

  exists(username: string): Promise<boolean>;

}
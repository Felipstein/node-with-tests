import { User } from "../entities/User";

export interface IUsersRepository {

  create(user: User): Promise<User>;

  usernameExists(username: string): Promise<boolean>

  emailExists(email: string): Promise<boolean>

}
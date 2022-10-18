import { User } from '../../entities/User';
import { IUsersRepository } from './../IUsersRepository';
export class InMemoryUsersRepository implements IUsersRepository {

  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }

  async usernameExists(username: string): Promise<boolean> {
    return this.users.some(user => user.username === username);
  }

  async emailExists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }

}
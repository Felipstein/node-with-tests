import { uuid } from "uuidv4";

export class User {

  readonly id: string;

  readonly name: string;
  readonly username?: string;
  readonly email: string;
  readonly password: string;

  constructor({ name, username, email, password }: Omit<User, 'id'>, id?: string) {
    this.id = id ?? uuid();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

}
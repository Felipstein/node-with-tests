import { UseCasesError } from './../../../errors/UseCasesError';
import { IUsersRepository } from './../../../repositories/IUsersRepository';
import { User } from '../../../entities/User';
import { InMemoryUsersRepository } from './../../../repositories/in-memory/InMemoryUsersRepository';
import { CreateUserUseCases } from './CreateUserUseCases';
describe('Create User', () => {

  let usersRepository: IUsersRepository;
  let createUserUseCases: CreateUserUseCases;

  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository();
    createUserUseCases = new CreateUserUseCases(usersRepository);
  })

  it('should be able to create a new user', async () => {

    const userData: User = new User({
      name: 'Test Test',
      username: 'Test User',
      email: 'test@test.com',
      password: 'testpassword',
    });

    const user = await createUserUseCases.execute(userData);

    expect(user).toHaveProperty('id');
  });

  it('should create a user with encrypted password', async () => {
    const password = 'testpassword';

    const userData: User = new User({
      name: 'Test Test',
      username: 'Other Test User',
      email: 'test2@test.com',
      password,
    });

    const user = await createUserUseCases.execute(userData);

    const encryptedPassword = user.password;

    expect(encryptedPassword).not.toBe(password);

  });

  it('should not be able to create an existing user', async () => {
    const userData: User = new User({
      name: 'Test Existing Name',
      email: 'testexisting@test.com',
      password: 'testpassword',
    });

    await createUserUseCases.execute(userData);

    await expect(createUserUseCases.execute(userData)).rejects.toEqual(new UseCasesError(400, 'E-mail já cadastrado.'));
  });

});
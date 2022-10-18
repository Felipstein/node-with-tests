/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest';

import { app } from '../../../app';

describe('Create User Controller', () => {

  it('should be able to create a new user', async () => {

    const res = await request(app)
      .post('/users')
      .send({
        name: 'Test Integration User',
        username: 'Test Integration Username 2',
        email: 'testintegration_@test.com',
        password: '123456',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should not be able to create an existing user', async () => {

    await request(app).post('/users').send({
      name: 'Test Integration User',
      email: 'testintegration@test.com',
      password: '1234',
    });

    const res = await request(app).post('/users').send({
      name: 'Test Integration User',
      email: 'testintegration@test.com',
      password: '1234',
    });

    expect(res.status).toBe(400);

  });
});
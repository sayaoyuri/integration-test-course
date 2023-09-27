import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const res =  await api.post('/users').send({
        email: "josefino@gmail.com",
        password: "senha123"
    });

    expect(res.statusCode).toBe(201);
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    await api.post('/users').send({
      email: "josefino@gmail.com",
      password: "senha123"
    });

    const res =  await api.post('/users').send({
      email: "josefino@gmail.com",
      password: "senha123"
    });

    expect(res.statusCode).toBe(409);
  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const createRes =  await api.post('/users').send({
      email: "josefino@gmail.com",
      password: "senha123"
    });

    const res = await api.get(`/users/${createRes.body.id}`);

    expect(res.body).toEqual(createRes.body);
  });

  it("should return 404 when can't find a user by id", async () => {
    const res = await api.get('/users/1');

    expect(res.statusCode).toBe(404);
  });

  it("should return all users", async () => {
    await api.post('/users').send({
      email: "josefino@gmail.com",
      password: "senha123"
    });

    await api.post('/users').send({
      email: "joaozinho@gmail.com",
      password: "senha123"
    });

    const res = await api.get('/users');

    expect(res.body).toHaveLength(2);

    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: expect.any(String),
        })
      ])
    );
  });
})
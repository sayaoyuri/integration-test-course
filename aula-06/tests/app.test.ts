import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it('Should respond with status 200 & right object structure', async () => {
    const result = await api.get('/event');

    const { statusCode, body } = result;

    expect(statusCode).toEqual(200);
    expect(body).toEqual(
      expect.objectContaining({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String)
    })
    );
  });
});
import app from "../src/app";
import supertest from "supertest";

const server = supertest(app);

describe('GET /fibonacci', () => {
  it('Should respond with statusCode 400 when querystring elements is a string', async () => {
    const elements = 'abc';
    const result = await server.get(`/fibonacci?elements=${elements}`);

    const { statusCode } = result;

    expect(statusCode).toEqual(400);
  });

  it('Should respond with statusCode 400 when querystring elements < than 1', async () => {
    const elements = 0;
    const result = await server.get(`/fibonacci?elements=${elements}`);

    const { statusCode } = result;

    expect(statusCode).toEqual(400);
  });

  it('Should respond with status 200 and an array with length equal to the given elements when elements is a number'
  , async () => {
    const elements = 7;
    const result = await server.get(`/fibonacci?elements=${elements}`);

    const { statusCode, body } = result;

    expect(statusCode).toBe(200);
    expect(body).toHaveLength(elements);
  });
});
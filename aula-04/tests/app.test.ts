import app from "../src/app";
import supertest from "supertest";
const server = supertest(app);

describe('GET /health', () => {
  it('should respond with statusCode 200 when api is running', async () => {
    const result = await server.get('/health');

    const { statusCode } = result;

    expect(statusCode).toBe(200);
  });
});
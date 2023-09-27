import prisma from "../../src/database";

export async function createUser (email: string, password: string) {
  const data = { email, password };
  return await prisma.user.create({ data });
};

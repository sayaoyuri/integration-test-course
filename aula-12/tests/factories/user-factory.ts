import { faker } from "@faker-js/faker";
import prisma from "../../src/database";
import { UserInput } from "../../src/repository";

export async function buildUser(email: string, password?: string) {
  const userData: UserInput = {
    email,
    password: password || new Date().getTime().toString()
  };

  const user = await prisma.user.create({ data: userData });
  return user;
}

export async function buildRandomUser() {
  return prisma.user.create({
    data:{
      email: faker.internet.email(),
      password: faker.internet.password()
    }
  });
}
//This file is used to maintain Database validity.
//Use the default prisma client, instead of creating a new instance with each use.

import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export async function testDbConnection() {
  try {
    await prisma.$connect();
    return true;
  } catch (err) {
    console.error("DB connection failed:", err);
    return false;
  }
}

//exporting a globl instance
export default prisma;
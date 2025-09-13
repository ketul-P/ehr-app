import bcrypt from "bcrypt";
import prisma from "./db.js";

export async function verifyLogin(username, password) {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) return 401;

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) return 403;

  return {
    id: user.id,
    username: user.username,
    email: user.email
  };
}

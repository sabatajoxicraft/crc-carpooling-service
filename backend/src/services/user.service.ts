import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

export const registerUser = async (userData: any) => {
  const { name, email, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

export const loginUser = async (loginData: any) => {
  const { email, password } = loginData;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return user;
};

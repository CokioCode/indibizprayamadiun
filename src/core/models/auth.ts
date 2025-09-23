import prisma from "../../integrations/prisma";
import {
  comparePassword,
  signToken,
  UnauthorizedError,
  NotFoundError,
} from "../../shared";

export const AuthModel = {
  async login(data: { username: string; password: string }) {
    try {
      const user = await prisma.auth.findUnique({
        where: { username: data.username },
      });

      if (!user) {
        throw new NotFoundError("User not found");
      }

      const isMatch = await comparePassword(data.password, user.password);
      if (!isMatch) {
        throw new UnauthorizedError("Invalid credentials");
      }

      const newToken = signToken({ id: user.id, username: user.username });

      return { token: newToken };
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
};

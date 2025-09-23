import { Hono } from "hono";
import { authController } from "../../core";
import { loginSchema } from "../../shared/types/auth";
import { validateBody } from "../../core/middlewares/validation";

const authRoutes = new Hono();

authRoutes.post("/login", validateBody(loginSchema), authController.login);

export default authRoutes;

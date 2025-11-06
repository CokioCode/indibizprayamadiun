import { Hono } from "hono";
import { authController } from "../../core/index.js";
import { loginSchema } from "../../shared/types/auth.js";
import { validateBody } from "../../core/middlewares/validation.js";

const authRoutes = new Hono();

authRoutes.post("/login", validateBody(loginSchema), authController.login);

export default authRoutes;
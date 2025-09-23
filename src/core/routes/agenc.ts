import { Hono } from "hono";
import { agencController } from "@/core/controllers/agenc";
import { validateBody } from "@/core/middlewares/validation";
import { agencSchema } from "@/shared/types/agenc";

const agencRoutes = new Hono();

agencRoutes.get("/", agencController.index);
agencRoutes.get("/:id", agencController.show);
agencRoutes.post("/", validateBody(agencSchema), agencController.create);
agencRoutes.put("/:id", validateBody(agencSchema), agencController.update);
agencRoutes.delete("/:id", agencController.delete);

export default agencRoutes;

import { Hono } from "hono";
import { agencController } from "../../core/controllers/agenc.js";
import { validateBody } from "../../core/middlewares/validation.js";
import { agencSchema } from "../../shared/types/agenc.js";

const agencRoutes = new Hono();

agencRoutes.get("/", agencController.index);
agencRoutes.get("/list", agencController.list);
agencRoutes.get("/:id", agencController.show);
agencRoutes.post("/", validateBody(agencSchema), agencController.create);
agencRoutes.put("/:id", validateBody(agencSchema), agencController.update);
agencRoutes.delete("/:id", agencController.delete);
agencRoutes.post("/import", agencController.import);

export default agencRoutes;

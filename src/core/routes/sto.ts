import { Hono } from "hono";
import { stoController } from "../controllers/sto.js";
import { validateBody } from "../../core/middlewares/validation.js";
import { stoSchema } from "../../shared/types/sto.js";

const stoRoutes = new Hono();

stoRoutes.get("/", stoController.index);
stoRoutes.get("/list", stoController.list);
stoRoutes.get("/:id", stoController.show);
stoRoutes.post("/", validateBody(stoSchema), stoController.create);
stoRoutes.put("/:id", validateBody(stoSchema), stoController.update);
stoRoutes.delete("/:id", stoController.delete);
stoRoutes.post("/import", stoController.import);

export default stoRoutes;
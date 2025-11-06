import { Hono } from "hono";
import { prodigiController } from "../../core/controllers/prodigi";

const prodigiRoutes = new Hono();

prodigiRoutes.get("/", prodigiController.index);
prodigiRoutes.get("/list", prodigiController.list);
prodigiRoutes.get("/:id", prodigiController.show);
prodigiRoutes.post("/", ...(prodigiController.create as any));
prodigiRoutes.put("/:id", ...(prodigiController.update as any));
prodigiRoutes.patch("/:id", ...(prodigiController.update as any));
prodigiRoutes.delete("/:id", prodigiController.delete);
prodigiRoutes.post("/import", prodigiController.import);

export default prodigiRoutes;








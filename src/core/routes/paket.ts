import { Hono } from "hono";
import { paketController } from "../../core/index.js";
import { validateBody } from "../../core/middlewares/validation.js";
import { paketSchemaCreate, paketSchemaUpdate } from "../../shared/types/paket.js";

const paketRoutes = new Hono();

paketRoutes.get("/", paketController.index);
paketRoutes.get("/list", paketController.list);
paketRoutes.get("/:id", paketController.show);
paketRoutes.post("/", validateBody(paketSchemaCreate), paketController.create);
paketRoutes.put(
  "/:id",
  validateBody(paketSchemaUpdate),
  paketController.update
);
paketRoutes.patch(
  "/:id",
  validateBody(paketSchemaUpdate),
  paketController.update
);
paketRoutes.delete("/:id", paketController.delete);
paketRoutes.post("/import", paketController.import);

export default paketRoutes;

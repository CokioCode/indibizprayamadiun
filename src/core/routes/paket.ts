import { Hono } from "hono";
import { paketController } from "@/core";
import { validateBody } from "@/core/middlewares/validation";
import { paketSchemaCreate, paketSchemaUpdate } from "@/shared/types/paket";

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
paketRoutes.delete("/:id", paketController.delete);

export default paketRoutes;

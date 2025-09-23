import { Hono } from "hono";
import { datelController } from "../../core/controllers/datel";
import { validateBody } from "../../core/middlewares/validation";
import { datelSchemaCreate, datelSchemaUpdate } from "../../shared/types/datel";

const datelRoutes = new Hono();

datelRoutes.get("/", datelController.index);
datelRoutes.get("/list", datelController.list);
datelRoutes.get("/:id", datelController.show);
datelRoutes.post("/", validateBody(datelSchemaCreate), datelController.create);
datelRoutes.put(
  "/:id",
  validateBody(datelSchemaUpdate),
  datelController.update
);
datelRoutes.delete("/:id", datelController.delete);

export default datelRoutes;

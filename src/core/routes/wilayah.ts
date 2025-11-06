import { Hono } from "hono";
import { validateBody } from "../../core/middlewares/validation.js";
import { wilayahSchema } from "../../shared/types/wilayah.js";
import { wilayahController } from "../controllers/wilayah.js";

const wilayahRoutes = new Hono();

wilayahRoutes.get("/", wilayahController.index);
wilayahRoutes.get("/list", wilayahController.list);
wilayahRoutes.get("/:id", wilayahController.show);
wilayahRoutes.post("/", validateBody(wilayahSchema), wilayahController.create);
wilayahRoutes.put(
  "/:id",
  validateBody(wilayahSchema),
  wilayahController.update
);
wilayahRoutes.delete("/:id", wilayahController.delete);
wilayahRoutes.post("/import", wilayahController.import);

wilayahRoutes.post("/:id/stos", wilayahController.addStos);
wilayahRoutes.delete("/:id/stos", wilayahController.removeStos);
wilayahRoutes.post("/import", wilayahController.import)

export default wilayahRoutes;
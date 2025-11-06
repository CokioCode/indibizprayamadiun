import { Hono } from "hono";
import { promoController } from "../../core/index.js";
import { validateBody } from "../../core/middlewares/validation.js";
import { promoSchemaCreate, promoSchemaUpdate } from "../../shared/types/promo.js";

const promoRoutes = new Hono();

promoRoutes.get("/", promoController.index);
promoRoutes.get("/list", promoController.list);
promoRoutes.get("/:id", promoController.show);
promoRoutes.post("/", validateBody(promoSchemaCreate), promoController.create);
promoRoutes.put(
  "/:id",
  validateBody(promoSchemaUpdate),
  promoController.update
);
promoRoutes.patch(
  "/:id",
  validateBody(promoSchemaUpdate),
  promoController.update
);
promoRoutes.delete("/:id", promoController.delete);
promoRoutes.post("/import", promoController.import);

export default promoRoutes;
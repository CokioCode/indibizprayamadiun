import { Hono } from "hono";
import { promoController } from "../../core";
import { validateBody } from "../../core/middlewares/validation";
import { promoSchemaCreate, promoSchemaUpdate } from "../../shared/types/promo";

const promoRoutes = new Hono();

promoRoutes.get("/", promoController.index);
promoRoutes.get("/:id", promoController.show);
promoRoutes.post("/", validateBody(promoSchemaCreate), promoController.create);
promoRoutes.put(
  "/:id",
  validateBody(promoSchemaUpdate),
  promoController.update
);
promoRoutes.delete("/:id", promoController.delete);

export default promoRoutes;

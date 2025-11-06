import { Hono } from "hono";
import { salesController } from "../../core";
import { validateBody } from "../../core/middlewares/validation";
import { createSalesSchema, updateSalesSchema } from "../../shared/types/sales";

const salesRoutes = new Hono();

salesRoutes.get("/", salesController.index);
salesRoutes.get("/list", salesController.list);
salesRoutes.get("/:id", salesController.show);
salesRoutes.post("/", validateBody(createSalesSchema), salesController.create);
salesRoutes.put(
  "/:id",
  validateBody(updateSalesSchema),
  salesController.update
);
salesRoutes.delete("/:id", salesController.delete);
salesRoutes.post("/import", salesController.import);

export default salesRoutes;
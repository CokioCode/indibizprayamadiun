import { Hono } from "hono";
import { kategoriController } from "../../core";
import { validateBody } from "../../core/middlewares/validation";
import { kategoriSchema } from "../../shared/types/kategori";

const kategoriRoutes = new Hono();

kategoriRoutes.get("/", kategoriController.index);
kategoriRoutes.get("/:id", kategoriController.show);
kategoriRoutes.post(
  "/",
  validateBody(kategoriSchema),
  kategoriController.create
);
kategoriRoutes.put(
  "/:id",
  validateBody(kategoriSchema),
  kategoriController.update
);
kategoriRoutes.delete("/:id", kategoriController.delete);

export default kategoriRoutes;

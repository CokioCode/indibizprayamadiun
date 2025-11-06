import { Hono } from "hono";
import { registrasiIndibizController } from "../../core/controllers/registrasi_indibiz.js";
import { validateBody } from "../middlewares/validation.js";
import { statusNomerAo } from "../../shared/types/registrasi_indibiz.js";

const registrasiIndibizRoutes = new Hono();

registrasiIndibizRoutes.get("/", registrasiIndibizController.index);
registrasiIndibizRoutes.get("/:id", registrasiIndibizController.show);
registrasiIndibizRoutes.post("/", registrasiIndibizController.create);
registrasiIndibizRoutes.put("/:id", registrasiIndibizController.update);
registrasiIndibizRoutes.patch(
  "/:id/status",
  validateBody(statusNomerAo),
  registrasiIndibizController.setKodeSc
);
registrasiIndibizRoutes.delete("/:id", registrasiIndibizController.delete);
registrasiIndibizRoutes.post("/import", registrasiIndibizController.import);

export default registrasiIndibizRoutes;
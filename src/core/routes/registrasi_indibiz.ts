import { Hono } from "hono";
import { registrasiIndibizController } from "@/core/controllers/registrasi_indibiz";

const registrasiIndibizRoutes = new Hono();

registrasiIndibizRoutes.get("/", registrasiIndibizController.index);
registrasiIndibizRoutes.get("/:id", registrasiIndibizController.show);
registrasiIndibizRoutes.post("/", registrasiIndibizController.create);
registrasiIndibizRoutes.put("/:id", registrasiIndibizController.update);
registrasiIndibizRoutes.delete("/:id", registrasiIndibizController.delete);

export default registrasiIndibizRoutes;

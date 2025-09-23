import { Hono } from "hono";

import authRoutes from "./auth";
import agencRoutes from "./agenc";
import datelRoutes from "./datel";
import promoRoutes from "./promo";
import paketRoutes from "./paket";
import salesRoutes from "./sales";
import kategoriRoutes from "./kategori";
import registrasiIndibizRoutes from "./registrasi_indibiz";

const routes = new Hono().basePath("/api");

routes.route("/auth", authRoutes);
routes.route("/categori", kategoriRoutes);
routes.route("/agenc", agencRoutes);
routes.route("/datel", datelRoutes);
routes.route("/promo", promoRoutes);
routes.route("/paket", paketRoutes);
routes.route("/sales", salesRoutes);
routes.route("/registrasi_indibiz", registrasiIndibizRoutes);

export { routes };

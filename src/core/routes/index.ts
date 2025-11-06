import { Hono } from "hono";
import agencRoutes from "./agenc.js";
import authRoutes from "./auth.js";
import paketRoutes from "./paket.js";
import wilayahRoutes from "./wilayah.js";
import promoRoutes from "./promo.js";
import registrasiIndibizRoutes from "./registrasi_indibiz.js";
import salesRoutes from "./sales.js";
import stoRoutes from "./sto.js";
import prodigiRoutes from "./prodigi.js";
import botRoutes from "./bot.js";

const routes = new Hono().basePath("/api");

routes.route("/auth", authRoutes);
routes.route("/agenc", agencRoutes);
routes.route("/sto", stoRoutes);
routes.route("/wilayah", wilayahRoutes);
routes.route("/promo", promoRoutes);
routes.route("/paket", paketRoutes);
routes.route("/sales", salesRoutes);
routes.route("/registrasi_indibiz", registrasiIndibizRoutes);
routes.route("/prodigi", prodigiRoutes);
routes.route("/bot", botRoutes);

export { routes };
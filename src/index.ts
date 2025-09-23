import { Hono } from "hono";
import { routes } from "./core";
import { errorHandler } from "./core/middlewares/errorHandler";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("*", logger());

app.onError(errorHandler);

app.get("/", (c) => {
  return c.json({
    message: "Hello Hono!",
    status: "OK",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.route("/", routes);

app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: "Route not found",
      path: c.req.path,
      method: c.req.method,
    },
    404
  );
});

export default {
  port: process.env.PORT || 8080,
  hostname: process.env.HOSTNAME || "0.0.0.0",
  fetch: app.fetch,
};

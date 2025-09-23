import { Context, Next } from "hono";
import { ValidationError } from "../../shared";
import z from "zod";

export const validateBody = (schema: z.ZodSchema) => {
  return async (c: Context, next: Next) => {
    try {
      const body = await c.req.json();
      const validatedData = schema.parse(body);

      c.set("validatedBody", validatedData);
      await next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));

        throw new ValidationError("Validation failed", validationErrors);
      }

      throw error;
    }
  };
};

export const validateQuery = (schema: z.ZodSchema) => {
  return async (c: Context, next: Next) => {
    try {
      const query = c.req.query();
      const validatedQuery = schema.parse(query);

      c.set("validatedQuery", validatedQuery);
      await next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors: Record<string, string[]> = {};
        error.issues.forEach((err) => {
          const path = err.path.join(".");
          if (!validationErrors[path]) {
            validationErrors[path] = [];
          }
          validationErrors[path].push(err.message);
        });

        throw new ValidationError("Query validation failed", validationErrors);
      }
      throw error;
    }
  };
};

export const validateParams = (schema: z.ZodSchema) => {
  return async (c: Context, next: Next) => {
    try {
      const params = c.req.param();
      const validatedParams = schema.parse(params);

      c.set("validatedParams", validatedParams);
      await next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors: Record<string, string[]> = {};
        error.issues.forEach((err) => {
          const path = err.path.join(".");
          if (!validationErrors[path]) {
            validationErrors[path] = [];
          }
          validationErrors[path].push(err.message);
        });

        throw new ValidationError(
          "Parameter validation failed",
          validationErrors
        );
      }
      throw error;
    }
  };
};

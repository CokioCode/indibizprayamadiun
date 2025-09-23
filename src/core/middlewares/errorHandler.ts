import { Context, Next } from "hono";
import { AppError, ResponseHelper } from "@/shared";
import { ContentfulStatusCode } from "hono/utils/http-status";

export const errorHandler = (error: any, c: Context) => {
  if (error instanceof AppError) {
    console.log("Handling AppError:", error.constructor.name);
    return ResponseHelper.error(
      c,
      error.message,
      error.statusCode as ContentfulStatusCode,
      error.errors
    );
  }

  if (
    error.code &&
    typeof error.code === "string" &&
    error.code.startsWith("P")
  ) {
    console.log("Handling Prisma error:", error.code);

    switch (error.code) {
      case "P2002":
        return ResponseHelper.error(c, "Duplicate entry", 409);
      case "P2025":
        return ResponseHelper.error(c, "Record not found", 404);
      case "P2003":
        return ResponseHelper.error(c, "Foreign key constraint failed", 400);
      default:
        return ResponseHelper.error(c, "Database error", 400);
    }
  }

  if (error.name === "ZodError") {
    console.log("Handling Zod validation error");
    const validationErrors: Record<string, string[]> = {};
    error.errors?.forEach((err: any) => {
      const path = err.path.join(".");
      if (!validationErrors[path]) {
        validationErrors[path] = [];
      }
      validationErrors[path].push(err.message);
    });

    return ResponseHelper.validationError(c, validationErrors);
  }

  if (
    error.name === "JsonWebTokenError" ||
    error.name === "TokenExpiredError"
  ) {
    console.log("Handling JWT error");
    return ResponseHelper.error(c, "Invalid or expired token", 401);
  }

  // if (error instanceof SyntaxError && error.message.includes("JSON")) {
  //   console.log("Handling JSON parsing error");
  //   return ResponseHelper.error(c, "Invalid JSON format", 400);
  // }

  console.log("Handling unknown error - returning 500");
  console.error(error);
  return ResponseHelper.error(
    c,
    process.env.NODE_ENV === "production"
      ? "Internal server error"
      : error?.message || "Internal server error",
    500
  );
};

export const errorMiddleware = async (c: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    return errorHandler(err, c);
  }
};

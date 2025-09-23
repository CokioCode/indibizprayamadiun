import { Context } from "hono";
import { ContentfulStatusCode } from "hono/utils/http-status";

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Record<string, string[]>;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T = any> {
  success: boolean;
  message?: string;
  result: {
    pagination: PaginationMeta;
    data: T[];
  };
}

export class ResponseHelper {
  static success<T>(
    c: Context,
    data?: T,
    message?: string,
    statusCode: ContentfulStatusCode = 200
  ) {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
    };
    return c.json(response, statusCode);
  }

  static error(
    c: Context,
    message: string,
    statusCode: ContentfulStatusCode = 400,
    errors?: Record<string, string[]>
  ) {
    if (errors) {
      return c.json(
        {
          success: false,
          message: "Validation failed",
          errors,
        },
        statusCode
      );
    }

    return c.json(
      {
        success: false,
        message: message || "Internal Server Error",
        data: null,
      },
      statusCode
    );
  }

  static validationError(
    c: Context,
    errors: Record<string, string[]>,
    message: string = "Validation failed"
  ) {
    const response: ApiResponse = {
      success: false,
      error: message,
      errors,
    };
    return c.json(response, 422);
  }

  static paginated<T>(
    c: Context,
    data: T[],
    pagination: PaginationMeta,
    message?: string,
    statusCode: ContentfulStatusCode = 200
  ) {
    const response: PaginatedResponse<T> = {
      success: true,
      message,
      result: {
        pagination,
        data,
      },
    };
    return c.json(response, statusCode);
  }
}

export class PaginationHelper {
  static createMeta(
    page: number,
    limit: number,
    total: number
  ): PaginationMeta {
    const totalPages = Math.ceil(total / limit);
    return {
      page,
      limit,
      total,
      totalPages,
    };
  }

  static validatePaginationParams(page?: number, limit?: number) {
    const validPage = Math.max(1, page || 1);
    const validLimit = Math.min(Math.max(1, limit || 5), 100); // Max 100 items per page
    return { page: validPage, limit: validLimit };
  }
}

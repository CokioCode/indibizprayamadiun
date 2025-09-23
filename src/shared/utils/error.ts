export enum ErrorCode {
  VALIDATION_ERROR = "VALIDATION_ERROR",
  NOT_FOUND = "NOT_FOUND",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  BAD_REQUEST = "BAD_REQUEST",
  CONFLICT = "CONFLICT",
}

export class AppError extends Error {
  public statusCode: number;
  public code: ErrorCode;
  public errors?: Record<string, string[]>;

  constructor(
    message: string,
    statusCode: number = 500,
    code: ErrorCode = ErrorCode.INTERNAL_ERROR,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.errors = errors;
    this.name = "AppError";

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(
    message: string = "Validation failed",
    errors?: Record<any, any>
  ) {
    super(message, 422, ErrorCode.VALIDATION_ERROR, errors);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, 404, ErrorCode.NOT_FOUND);
    this.name = "NotFoundError";
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Invalid request parameters") {
    super(message, 400, ErrorCode.BAD_REQUEST);
    this.name = "BadRequestError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, 401, ErrorCode.UNAUTHORIZED);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
    super(message, 403, ErrorCode.FORBIDDEN);
    this.name = "ForbiddenError";
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Resource already exists") {
    super(message, 409, ErrorCode.CONFLICT);
    this.name = "ConflictError";
  }
}

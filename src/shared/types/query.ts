import { z } from "zod";

export const paginationSchema = z.object({
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().min(1, "Page must be at least 1"))
    .optional()
    .default(1),
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().min(1).max(100, "Limit must be between 1 and 100"))
    .optional()
    .default(10),
  search: z.string().max(100).optional(),
  sortBy: z
    .enum(["createdAt", "updatedAt", "username", "email"])
    .optional()
    .default("createdAt"),
  sortOrder: z.enumType(["asc", "desc"]).optional().default("desc"),
});

export const idParamSchema = z.object({
  id: z
    .uuid("Invalid ID format")
    .or(z.string().regex(/^[0-9]+$/, "ID must be a valid number or UUID")),
});

export type PaginationQuery = z.infer<typeof paginationSchema>;
export type IdParam = z.infer<typeof idParamSchema>;

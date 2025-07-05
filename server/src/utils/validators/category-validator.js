import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Category name must be at least 3 characters")
    .max(50, "Category name must be at most 50 characters"),
});

export const updateCategorySchema = categorySchema.partial();

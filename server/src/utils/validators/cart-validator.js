import { z } from "zod";

export const addItemSchema = z.object({
  productId: z.string().trim().min(1, "Product ID is required"),
});

export const updateQtySchema = z.object({
  productId: z.string().trim().min(1, "Product ID is required"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .refine((val) => val !== 0, { message: "Quantity cannot be zero" }),
});

export const removeItemSchema = z.object({
  productId: z.string().trim().min(1, "Product ID is required"),
});

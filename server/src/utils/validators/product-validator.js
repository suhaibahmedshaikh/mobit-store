import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().min(3).trim(),
  description: z.string().min(10).trim(),
  price: z.coerce.number().positive(),
  category: z.string(),
  photos: z.array(
    z.object({
      public_id: z.string(),
      secure_url: z.string().url(),
    })
  ),
  stock: z.coerce.number().int().positive(),
});

export const updateProductSchema = addProductSchema.partial();

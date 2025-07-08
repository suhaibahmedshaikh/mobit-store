import { z } from "zod";

const orderItemSchema = z.object({
  product: z.string().min(1, "Product ID is required"),
  quantity: z.number().int().min(1, "Quantity must be atleast 1"),
  price: z.number().min(0, "Price must be positive numbers"),
});

const shippingAddressSchema = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
  addressLine: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
});

export const createOrderSchema = z.object({
  items: z.array(orderItemSchema).min(1, "At least one item is required"),
  shippingAddress: shippingAddressSchema,
  totalAmount: z.number().min(0),
  paymentMethod: z.enum(["COD", "ONLINE"]),
  paymentStatus: z.enum(["Pending", "Paid", "Failed"]).optional(),
  orderStatus: z
    .enum(["Pending", "Processing", "Shipped", "Delivered", "Cancelled"])
    .optional(),
  deliveredAt: z.string().datetime().optional(),
  paidAt: z.string().datetime().optional(),
});

export const updateOrderSchema = createOrderSchema.partial();

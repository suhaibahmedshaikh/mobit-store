import express from "express";
import productRouter from "./product-routes.js";
import categoryRouter from "./category-route.js";
import cartRouter from "./cart-route.js";
import orderRouter from "./order-route.js";

const router = express.Router();

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);

export default router;

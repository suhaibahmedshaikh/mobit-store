import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUser,
  updateOrder,
} from "../../controllers/order-controller.js";
import {
  createOrderSchema,
  updateOrderSchema,
} from "../../utils/validators/order-validator.js";
import { validateRequest } from "../../middlewares/validateRequest.js";

const router = express.Router();

router
  .route("/")
  .post(validateRequest(createOrderSchema), createOrder)
  .get(getAllOrders);

router
  .route("/:id")
  .get(getOrderById)
  .put(validateRequest(updateOrderSchema), updateOrder);

router.route("/my-orders").get(getOrdersByUser);

export default router;

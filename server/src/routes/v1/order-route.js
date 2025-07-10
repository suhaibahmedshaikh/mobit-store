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

// mock authentication
router.use((req, res, next) => {
  req.user = { id: "6722296027c4eb4d75f2dd7f" };
  next();
});

router
  .route("/")
  .post(validateRequest(createOrderSchema), createOrder)
  .get(getAllOrders);

router.route("/my-orders").get(getOrdersByUser);

router
  .route("/:id")
  .get(getOrderById)
  .put(validateRequest(updateOrderSchema), updateOrder);

export default router;

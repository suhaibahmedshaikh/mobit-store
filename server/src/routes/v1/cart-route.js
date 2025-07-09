import express from "express";
import {
  addItemToCart,
  getCartByUser,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../../controllers/cart-controller.js";
import {
  addItemSchema,
  updateQtySchema,
  removeItemSchema,
} from "../../utils/validators/cart-validator.js";
import { validateRequest } from "../../middlewares/validateRequest.js";

const router = express.Router();

// mock authentication
router.use((req, res, next) => {
  req.user = { id: "6722296027c4eb4d75f2dd7f" };
  next();
});

router
  .route("/")
  .get(getCartByUser)
  .post(validateRequest(addItemSchema), addItemToCart)
  .put(validateRequest(updateQtySchema), updateItemQuantity)
  .delete(validateRequest(removeItemSchema), removeItemFromCart);

router.route("/clear").delete(clearCart);

export default router;

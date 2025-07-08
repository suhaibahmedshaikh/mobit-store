import express from "express";
import {
  addItemToCart,
  getCartByUser,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../../controllers/cart-controller.js";

const router = express.Router();

router
  .route("/")
  .get(getCartByUser)
  .post(addItemToCart)
  .put(updateItemQuantity)
  .delete(removeItemFromCart);

router.route("/clear", clearCart);

export default router;

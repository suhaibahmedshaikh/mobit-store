import { Cart } from "../models/cart-model.js";

export class CartRepository {
  async addItemToCart(data) {
    return await Cart.create(data);
  }

  async getCartByUser(userId) {
    return await Cart.findOne({ user: userId }).populate("items.product");
  }

  async saveCart(cart) {
    return await cart.save();
  }

  async removeItemFromCart(userId, productId) {
    return await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: productId } } },
      { new: true }
    ).populate("items.product");
  }

  async clearCart(userId) {
    return await Cart.findOneAndUpdate(
      { user: userId },
      { items: [] },
      { new: true }
    ).populate("items.product");
  }
}

import { CartRepository } from "../repositories/cart-repository.js";
import { ApiError } from "../utils/apiError.js";

export class CartService {
  constructor() {
    this.repo = new CartRepository();
  }

  async addItemToCart(userId, data) {
    let cart = await this.repo.getCartByUser(userId);

    if (!cart) {
      cart = await this.repo.addItemToCart({
        user: userId,
        items: [{ product: data.productId }],
      });
      return cart;
    }

    const exists = cart.items.find(
      (item) => item.product.toString() === data.productId.toString()
    );

    if (exists) {
      throw new ApiError(409, "Product already exists");
    }

    cart.items.push({ product: data.productId });

    return await this.repo.saveCart(cart);
  }

  async getCartByUser(userId) {
    const cart = await this.repo.getCartByUser(userId);

    if (!cart) {
      throw new ApiError(404, "Cart not found");
    }

    return cart;
  }

  async updateItemQuantity(userId, data) {
    let cart = await this.repo.getCartByUser(userId);

    if (!cart) {
      throw new ApiError(404, "Cart not found");
    }

    const item = cart.items.find(
      (item) => item.product.toString() === data.productId.toString()
    );

    if (!item) {
      throw new ApiError(404, "Item not in cart");
    }

    item.quantity = data.quantity;

    return await this.repo.saveCart(cart);
  }

  async removeItemFromCart(userId, productId) {
    const updatedCart = await this.repo.removeItemFromCart(userId, productId);

    if (!updatedCart) {
      throw new ApiError(404, "Cart not found");
    }

    return updatedCart;
  }

  async clearCart(userId) {
    const cart = await this.repo.clearCart(userId);

    if (!cart) {
      throw new ApiError(404, "Cart not found");
    }

    return cart;
  }
}

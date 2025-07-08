import { CartService } from "../services/cart-service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const service = new CartService();

export const addItemToCart = asyncHandler(async (req, res) => {
  const cart = await service.addItemToCart(req.user.id, req.body);

  return apiResponse(res, {
    statusCode: 201,
    message: "Item added to cart",
    data: cart,
  });
});

export const getCartByUser = asyncHandler(async (req, res) => {
  const cart = await service.getCartByUser(req.user.id);

  return apiResponse(res, {
    statusCode: 200,
    message: "Cart fetched successfully",
    data: cart,
  });
});

export const updateItemQuantity = asyncHandler(async (req, res) => {
  const cart = await service.updateItemQuantity(req.user.id, req.body);

  return apiResponse(res, {
    statusCode: 200,
    message: "Item updated successfully",
    data: cart,
  });
});

export const removeItemFromCart = asyncHandler(async (req, res) => {
  const cart = await service.removeItemFromCart(
    req.user.id,
    req.body.productId
  );

  return apiResponse(res, {
    statusCode: 200,
    message: "Item removed successfully",
    data: cart,
  });
});

export const clearCart = asyncHandler(async (req, res) => {
  const cart = await service.clearCart(req.user.id);

  return apiResponse(res, {
    statusCode: 200,
    message: "Cart cleared successfully",
    data: cart,
  });
});

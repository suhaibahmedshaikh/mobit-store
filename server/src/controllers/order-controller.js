import { OrderService } from "../services/order-service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const service = new OrderService();

export const createOrder = asyncHandler(async (req, res) => {
  const order = await service.createOrder(req.user.id, req.body);

  return apiResponse(res, {
    statusCode: 201,
    message: "Order created successfully",
    data: order,
  });
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await service.getAllOrders();

  return apiResponse(res, {
    statusCode: 200,
    message: "All orders fetched successfully",
    data: orders,
  });
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await service.getOrderById(req.params.id);

  return apiResponse(res, {
    statusCode: 200,
    message: "Order fetched successfully",
    data: order,
  });
});

export const getOrdersByUser = asyncHandler(async (req, res) => {
  const orders = await service.getOrdersByUser(req.user.id);

  return apiResponse(res, {
    statusCode: 200,
    message: "Order for the user fetched successfully",
    data: orders,
  });
});

export const updateOrder = asyncHandler(async (req, res) => {
  const order = await service.updateOrder(req.params.id, req.body);

  return apiResponse(res, {
    statusCode: 200,
    message: "Order updated successfully",
    data: order,
  });
});

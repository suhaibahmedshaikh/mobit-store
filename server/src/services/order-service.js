import { OrderRepository } from "../repositories/order-repository.js";
import { ApiError } from "../utils/apiError.js";

export class OrderService {
  constructor() {
    this.repo = new OrderRepository();
  }

  async createOrder(userId, data) {
    if (!data.items || data.items.length === 0) {
      throw new ApiError(400, "Order must contain at least one product");
    }

    const newOrder = {
      user: userId,
      items: data.items,
      shippingAddress: data.shippingAddress,
      totalAmount: data.totalAmount,
      paymentMethod: data.paymentMethod,
      paymentStatus: data.paymentStatus || "Pending",
      orderStatus: data.orderStatus || "Pending",
      deliveredAt: data.deliveredAt || null,
      paidAt: data.paidAt || null,
    };

    return await this.repo.createOrder(newOrder);
  }

  async getAllOrders() {
    return await this.repo.getAllOrders();
  }

  async getOrderById(id) {
    const order = await this.repo.getOrderById(id);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }

    return order;
  }

  async getOrdersByUser(userId) {
    return await this.repo.getOrdersByUser(userId);
  }

  async updateOrder(id, updateData) {
    const order = await this.repo.getOrderById(id);

    if (!order) {
      throw new ApiError(404, "Order not found");
    }

    return await this.repo.updateOrder(id, updateData);
  }
}

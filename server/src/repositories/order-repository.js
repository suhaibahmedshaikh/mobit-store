import { Order } from "../models/order-model.js";
import { User } from "../models/user-model.js";

export class OrderRepository {
  async createOrder(data) {
    return await Order.create(data);
  }

  async getAllOrders() {
    return await Order.find({}).populate("user items.product");
  }

  async getOrderById(id) {
    return await Order.findById(id).populate("user items.product");
  }

  async getOrdersByUser(userId) {
    return await Order.find({ user: userId }).populate("items.product");
  }

  async updateOrder(id, data) {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  }
}

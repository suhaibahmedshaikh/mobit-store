import { Product } from "../models/product-model.js";

export class ProductRepository {
  async addProduct(data) {
    return await Product.create(data);
  }

  async getAllProducts(filter = {}) {
    return await Product.find(filter).populate("category");
  }

  async getProductById(productId) {
    return await Product.findById(productId).populate("category");
  }

  async updateProduct(productId, data) {
    return await Product.findByIdAndUpdate(productId, data, {
      new: true,
    }).populate("category");
  }

  async deleteProduct(productId) {
    return await Product.findByIdAndDelete(productId);
  }
}

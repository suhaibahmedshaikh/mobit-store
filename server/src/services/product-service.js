import { ProductRepository } from "../repositories/product-repository.js";
import { ApiError } from "../utils/apiError.js";

export class ProductService {
  constructor() {
    this.repo = new ProductRepository();
  }

  async addProduct(data) {
    return await this.repo.addProduct(data);
  }

  async getAllProducts(category) {
    const filter = category ? { category } : {};
    return await this.repo.getAllProducts(filter);
  }

  async getProductById(productId) {
    return await this.repo.getProductById(productId);
  }

  async updateProduct(productId, data) {
    const product = await this.repo.getProductById(productId);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    return await this.repo.updateProduct(productId, data);
  }

  async deleteProduct(productId) {
    const product = await this.repo.getProductById(productId);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    return await this.repo.deleteProduct(productId);
  }
}

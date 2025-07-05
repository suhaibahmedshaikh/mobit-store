import { Category } from "../models/category-model.js";

export class CategoryRepository {
  async addCategory(data) {
    return await Category.create(data);
  }

  async getAllCategories() {
    return await Category.find({});
  }

  async getCategoryById(categoryId) {
    return await Category.findById(categoryId);
  }

  async updateCategory(categoryId, data) {
    return await Category.findByIdAndUpdate(categoryId, data, { new: true });
  }

  async deleteCategory(categoryId) {
    return await Category.findByIdAndDelete(categoryId);
  }
}

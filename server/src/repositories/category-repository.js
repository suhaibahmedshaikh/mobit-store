import { Category } from "../models/category-model.js";

export class CategoryRepository {
  async addCategory(name) {
    return await Category.create({ name });
  }

  async getAllCategories() {
    return await Category.find({});
  }

  async getCategoryByName(name) {
    return await Category.findOne({ name });
  }

  async getCategoryById(categoryId) {
    return await Category.findById(categoryId);
  }

  async updateCategory(categoryId, name) {
    return await Category.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );
  }

  async deleteCategory(categoryId) {
    return await Category.findByIdAndDelete(categoryId);
  }
}

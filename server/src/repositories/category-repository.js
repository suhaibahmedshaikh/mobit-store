import { Category } from "../models/category-model.js";

export class CategoryRepository {
  async addCategory(data) {
    const category = new Category(data);
    return await category.save();
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

  async updateCategory(categoryId, data) {
    return await Category.findByIdAndUpdate(categoryId, data, { new: true });
  }

  async deleteCategory(categoryId) {
    return await Category.findByIdAndDelete(categoryId);
  }
}

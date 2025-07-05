import { CategoryRepository } from "../repositories/category-repository.js";
import { ApiError } from "../utils/apiError.js";

export class CategoryService {
  constructor() {
    this.repo = new CategoryRepository();
  }

  async addCategory(data) {
    const category = await this.repo.getCategoryByName(data.name);

    if (category) {
      throw new ApiError(409, "Category already exists");
    }

    return await this.repo.addCategory(data);
  }

  async getAllCategories() {
    return await this.repo.getAllCategories({});
  }

  async getCategoryById(categoryId) {
    const category = await this.repo.getCategoryById(categoryId);

    if (!category) {
      throw new ApiError(404, "Category not found");
    }

    return category;
  }

  async updateCategory(categoryId, data) {
    const category = await this.repo.getCategoryById(categoryId);

    if (!category) {
      throw new ApiError(404, "Category doesn't exists");
    }

    return await this.repo.updateCategory(categoryId, data);
  }

  async deleteCategory(categoryId) {
    const category = await this.repo.getCategoryById(categoryId);

    if (!category) {
      throw new ApiError(404, "Category doesn't exists");
    }

    return await this.repo.deleteCategory(categoryId);
  }
}

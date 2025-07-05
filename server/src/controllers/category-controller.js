import { CategoryService } from "../services/category-service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const service = new CategoryService();

export const addCategory = asyncHandler(async (req, res) => {
  const category = await service.addCategory(req.body);

  return apiResponse(res, {
    statusCode: 201,
    message: "Category added successfully",
    data: category,
  });
});

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await service.getAllCategories();

  return apiResponse(res, {
    statusCode: 200,
    message: "All categories fetched successfully",
    data: categories,
  });
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const category = await service.getCategoryById(req.params.categoryId);

  return apiResponse(res, {
    statusCode: 200,
    message: "Category fetched successfully",
    data: category,
  });
});

export const updateCategory = asyncHandler(async (req, res) => {
  const category = await service.updateCategory(
    req.params.categoryId,
    req.body
  );

  return apiResponse(res, {
    statusCode: 200,
    message: "Category updated successfully",
    data: category,
  });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await service.deleteCategory(req.params.categoryId);

  return apiResponse(res, {
    statusCode: 200,
    message: "Category deleted successfully",
    data: category,
  });
});

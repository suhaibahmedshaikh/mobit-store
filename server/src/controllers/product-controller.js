import { ProductService } from "../services/product-service.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const service = new ProductService();

export const addProduct = asyncHandler(async (req, res) => {
  const product = await service.addProduct(req.body);

  return apiResponse(res, {
    statusCode: 201,
    message: "Product added successfully",
    data: product,
  });
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await service.getAllProducts(req.query.category);

  return apiResponse(res, {
    statusCode: 200,
    message: "All Product fetched successfully",
    data: products,
  });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await service.getProductById(req.params.productId);

  return apiResponse(res, {
    statusCode: 200,
    message: "Product fetched successfully",
    data: product,
  });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await service.updateProduct(req.params.productId, req.body);

  return apiResponse(res, {
    statusCode: 200,
    message: "Product updated successfully",
    data: product,
  });
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await service.deleteProduct(req.params.productId);

  return apiResponse(res, {
    statusCode: 200,
    message: "Product deleted successfully",
    data: product,
  });
});

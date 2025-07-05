import express from "express";
import {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../../controllers/category-controller.js";
import {
  categorySchema,
  updateCategorySchema,
} from "../../utils/validators/category-validator.js";
import { validateRequest } from "../../middlewares/validateRequest.js";

const router = express.Router();

router
  .route("/")
  .post(validateRequest(categorySchema), addCategory)
  .get(getAllCategories);

router
  .route("/:categoryId")
  .get(getCategoryById)
  .put(validateRequest(updateCategorySchema), updateCategory)
  .delete(deleteCategory);

export default router;

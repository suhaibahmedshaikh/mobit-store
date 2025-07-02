import express from "express";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../controllers/product-controller.js";
import {
  addProductSchema,
  updateProductSchema,
} from "../../utils/validators/product-validator.js";
import { validateRequest } from "../../middlewares/validateRequest.js";

const router = express.Router();

router
  .route("/")
  .post(validateRequest(addProductSchema), addProduct)
  .get(getAllProducts);

router
  .route("/:productId")
  .get(getProductById)
  .put(validateRequest(updateProductSchema), updateProduct)
  .delete(deleteProduct);

export default router;

import express from "express";
import { upload } from "../../middlewares/upload.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../../controllers/product-controller.js";
import { uploadAndProcessPhotos } from "../../middlewares/uploadAndProcessPhotos.js";
import {
  addProductSchema,
  updateProductSchema,
} from "../../utils/validators/product-validator.js";
import { validateRequest } from "../../middlewares/validateRequest.js";

const router = express.Router();

router
  .route("/")
  .post(
    upload.array("photos", 5),
    uploadAndProcessPhotos,
    validateRequest(addProductSchema),
    addProduct
  )
  .get(getAllProducts);

router
  .route("/:productId")
  .get(getProductById)
  .put(validateRequest(updateProductSchema), updateProduct)
  .delete(deleteProduct);

export default router;

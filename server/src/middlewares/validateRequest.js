import { ApiError } from "../utils/apiError.js";

export const validateRequest = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return next(new ApiError(400, "Validation failed", error.errors));
  }
};

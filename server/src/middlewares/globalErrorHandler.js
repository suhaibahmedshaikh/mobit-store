import { apiResponse } from "../utils/apiResponse.js";

export const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return apiResponse(res, {
    statusCode,
    success: false,
    message,
    data: null,
    errors: err.errors || [],
  });
};

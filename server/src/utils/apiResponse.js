export const apiResponse = (
  res,
  { statusCode = 200, success = true, message, data = null, errors = [] }
) => {
  return res.status(statusCode).json({ success, message, data, errors });
};

import cloudinary from "../utils/cloudinary.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const uploadAndProcessPhotos = asyncHandler(async (req, res, next) => {
  const uploadedPhotos = [];

  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "mobit-store/products",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        stream.end(file.buffer);
      });

      uploadedPhotos.push({
        public_id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }

  req.body.photos = uploadedPhotos;

  next();
});

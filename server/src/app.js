import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import ApiRoutes from "./routes/routes.js";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.js";

// express app
const app = express();

// db call
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api", ApiRoutes);

// health check route
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// 404 Route Handler
app.all("*", (req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
});

// Error Handler
app.use(globalErrorHandler);

export default app;

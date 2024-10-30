// packages
import express from "express";
import cookieParser from "cookie-parser";

// express server
const app = express();

// configs
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/connectDB.js";
import ApiRoutes from "./routes/routes.js";

connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api", ApiRoutes);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// listening on server
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

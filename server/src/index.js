import express from "express";
import { PORT } from "./config/envConfig.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

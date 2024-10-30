import express from "express";

const router = express.Router();

import userRoute from "./user-route.js";

router.use("/users", userRoute);

export default router;

import express from "express";

const router = express.Router();

import v1ApiRoutes from "./v1/v1-routes.js";

router.use("/v1", v1ApiRoutes);

export default router;

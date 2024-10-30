import express from "express";

const router = express.Router();

import { createUser } from "../../controllers/user-controller.js";

router.post("/register", createUser);

export default router;

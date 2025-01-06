// routes/applicationRoutes.js

import express from "express";
import { getUserApplications } from "../controllers/applicationController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/user-applications/:userId", userAuth, getUserApplications);

export default router;

import express from "express";
import { getUsers, loginUser } from "../controller/user.controller.js";
import { successHandler } from "../middleware/index.js";
import { signupToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers, successHandler);

router.get("/login", signupToken, loginUser, successHandler);

export default router;

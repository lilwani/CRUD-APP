import express from "express";
import {
  getUsers,
  loginUser,
  registerUser,
} from "../controller/user.controller.js";
import { successHandler } from "../middleware/index.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers, successHandler);

router.post("/login", verifyToken, loginUser, successHandler);

router.post("/registerUser", verifyToken, registerUser, successHandler);

export default router;

import express from "express";
import { getUsers } from "../controller/user.controller.js";
import { successHandler } from "../middleware/index.js";

const router = express.Router();

router.get("/", getUsers, successHandler);

export default router;

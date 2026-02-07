import express from "express";
import { logger } from "./utilities/logger.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 4311;

app.get("/", (req, res) => {
  logger.info("Inside base route");
});

app.listen(PORT, (err) => {
  if (err) {
    logger.error(`Failed connecting to server on PORT ${PORT} with ${err}`);
  } else {
    logger.info(`Connected to PORT ${PORT}`);
  }
});

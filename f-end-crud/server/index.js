import express from "express";
import { logger } from "./utilities/logger.js";
import dotenv from "dotenv";
import { corsConfig } from "./utilities/cors.js";
import userRoutes from "./routes/User.route.js";
import { errorHandler } from "./middleware/index.js";
dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 4311;

app.use(corsConfig);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  logger.info("Inside base route");
});

app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) {
    logger.error(`Failed connecting to server on PORT ${PORT} with ${err}`);
  } else {
    logger.info(`Connected to PORT ${PORT}`);
  }
});

import cors from "cors";
import { logger } from "./logger.js";

const allowedUrls = process.env.WHITELISTED_URLS;

export const corsConfig = cors({
  origin: (origin, callback) => {
    logger.info(`Received request on ${origin}`);
    if (!origin) return callback(null, true);
    if (allowedUrls.indexOf(origin) === -1) {
      const errorMessage = `CORS does not allow access from origin - ${origin}`;
      return callback(new Error(errorMessage), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Authorization", "Content-Type"],
});

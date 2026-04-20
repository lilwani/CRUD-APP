import { logger } from "../utilities/logger.js";
import jwt from "jsonwebtoken";
import { AppError } from "../utilities/AppError.js";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (payload, userId, tokenType = null) => {
  const funcName = `generateAccessToken():`;
  const tokenFor = tokenType?.split("_")[0] ?? "access";
  try {
    logger.info(`${funcName} Generating ${tokenFor} Token for ${userId}`);
    const newToken = jwt.sign(payload, process.env[tokenType], {
      expiresIn: tokenType === "REFRESH_TOKEN_SECRET" ? "1d" : "15m",
    });
    return newToken;
  } catch (error) {
    const errorMessage = `${funcName} Could not generate ${tokenFor} token - ${JSON.stringify(error)}`;
    logger.error(errorMessage);
    /*
        Doing a throw in a child function would take control to catch of parent. 
        If there was no catch in child then it would go to parent catch   
    */
    throw new AppError(errorMessage, 500, error);
  }
};

const verifyToken = (req, _res, next) => {
  const funcName = "verifyToken():";
  try {
    logger.info(`${funcName} Verify the request`);
    const headers = req.headers["authorization"];
    if (!headers) throw new AppError(`${funcName} No token received`, 400);
    const token = headers.split(" ")[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    const errorMessage = `${funcName} Failed to authenticate token - ${JSON.stringify(error)}`;
    logger.error(errorMessage);
    next(
      error instanceof AppError
        ? error
        : new AppError(errorMessage, error.statusCode ?? 403, error),
    );
  }
};

export { generateToken, verifyToken };

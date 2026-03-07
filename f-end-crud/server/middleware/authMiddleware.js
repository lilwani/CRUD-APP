import { logger } from "../utilities/logger";
import { v6 as v6uuid } from "uuid";
import jwt from "jsonwebtoken";
import { AppError } from "../utilities/AppError";
import dotenv from "dotenv";
dotenv.config();

const signupToken = (req, res, next) => {
  const funcName = "signupToken():";
  try {
    const { email } = req.body;
    if (!email) throw new AppError(`${funcName} No Email received`, 400);
    logger.info(`${funcName} Signing up new user`);
    const newUserId = v6uuid();
    logger.info(`${funcName} New User id - ${newUserId}`);
    const jwtPayload = { userId: newUserId, email };
    const newAccessToken = generateAccessToken(jwtPayload, newUserId);
    res.locals.details = { accessToken: newAccessToken, userId: newUserId };
    return next();
  } catch (error) {
    const errorMessage = `${funcName} Signup Token creation exception - ${JSON.stringify(error)}`;
    logger.error(errorMessage);
    return next(
      error instanceof AppError
        ? error
        : new AppError(errorMessage, error.statusCode ?? 500, error),
    );
  }
};

const generateAccessToken = (payload, newUserId) => {
  const funcName = `generateAccessToken():`;
  try {
    logger.info(`${funcName} Generating Access Token for ${newUserId}`);
    const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: 15,
    });
    return newAccessToken;
  } catch (error) {
    const errorMessage = `${funcName} Could not generate access token - ${JSON.stringify(error)}`;
    logger.error(errorMessage);
    throw new AppError(errorMessage, 500, error);
  }
};



export { signupToken };

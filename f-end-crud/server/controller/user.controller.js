import axios from "axios";
import dotenv from "dotenv";
import { logger } from "../utilities/logger.js";
import { AppError } from "../utilities/AppError.js";
import usersDB from "../mockUsers.json" with { type: "json" };
import appsDB from "../mockApps.json" with { type: "json" };
import { generateToken } from "../middleware/authMiddleware.js";
import { v6 as v6uuid } from "uuid";
dotenv.config();

const getUsers = async (req, res, next) => {
  try {
    const allUsers = await axios.get(`${process.env.SERVER_URL}/users`);
    if (allUsers.status === axios.HttpStatusCode.Ok) {
      logger.info(
        `getUsers(): Data received - ${JSON.stringify(allUsers.data)}`,
      );
      res.locals.details = allUsers.data;
      return next();
    }
    throw AppError(`getUsers(): Could not fetch 200 OK status`);
  } catch (error) {
    logger.error(`getUsers(): Exception - ${JSON.stringify(error)}`);
    return next(
      error instanceof AppError
        ? error
        : new AppError(
            `getUsers(): Exception - ${JSON.stringify(error)}`,
            error.statusCode ?? 500,
            error,
          ),
    );
  }
};

const loginUser = (req, res, next) => {
  try {
    const { email, pass } = req.body;
    logger.info(`loginUser(): Log in user `);
    const userInDB = usersDB.users.find((user) => user.email === email);
    if (userInDB) {
      const allUserApps = appsDB.apps.filter(
        (apps) => apps.userId === userInDB.userId,
      );
      logger.info(
        `loginUser(): User with userId - ${userInDB.userId} - found with details - ${JSON.stringify(allUserApps)} `,
      );
      const jwtPayload = { userId: userInDB.userId, email };
      const newAccessToken = generateToken(
        jwtPayload,
        userInDB.userId,
        "ACCESS_TOKEN_SECRET",
      );
      const newRefreshToken = generateToken(
        jwtPayload,
        userInDB.userId,
        "REFRESH_TOKEN_SECRET",
      );
      res.locals.details = { accessToken: newAccessToken, userId: newUserId };
      res.locals.cookieToSend = {
        refTokDetails: newRefreshToken,
        exp: 24 * 60 * 60 * 1000,
      };
      return next();
    } else {
      throw new AppError(`User with ${email} not found`, 403);
    }
  } catch (error) {
    logger.error(`loginUser(): Login Exception - ${JSON.stringify(error)}`);
    return next(
      error instanceof AppError
        ? error
        : new AppError(
            `Login Error - ${JSON.stringify(error)}`,
            error.statusCode ?? 500,
            error,
          ),
    );
  }
};

const registerUser = (req, res, next) => {
  const funcName = "registerUser():";
  try {
    const { email, pass } = req.body;
    logger.info(`${funcName} Register new user `);
    if (!email || !pass) throw new AppError(`Email or address not sent`, 400);
    const newUserId = v6uuid();
    logger.info(`${funcName} New User id - ${newUserId}`);
    const jwtPayload = { userId: newUserId, email };
    const newAccessToken = generateToken(
      jwtPayload,
      newUserId,
      "ACCESS_TOKEN_SECRET",
    );
    const newRefreshToken = generateToken(
      jwtPayload,
      newUserId,
      "REFRESH_TOKEN_SECRET",
    );
    res.locals.details = { accessToken: newAccessToken, userId: newUserId };
    res.locals.cookieToSend = {
      refTokDetails: newRefreshToken,
      exp: 24 * 60 * 60 * 1000,
    };
    return next();
  } catch (error) {
    logger.error(`${funcName} Login Exception - ${JSON.stringify(error)}`);
    /* 
        A next with error middleware skips past the intermediary middlewares and directly jumps to first middleware with an error as first parameter.
        This is how we guarentee that calling next from error will take control to errorHandler middleware
    */
    return next(
      error instanceof AppError
        ? error
        : new AppError(
            `Login Error - ${JSON.stringify(error)}`,
            error.statusCode ?? 500,
            error,
          ),
    );
  }
};

export { getUsers, loginUser, registerUser };

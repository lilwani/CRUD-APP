import axios from "axios";
import dotenv from "dotenv";
import { logger } from "../utilities/logger.js";
import { AppError } from "../utilities/AppError.js";
import usersDB from "../mockUsers.json";
import appsDB from "../mockApps.json";
dotenv.config();

const getUsers = async (req, res, next) => {
  try {
    const userData = req.body;
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
      res.locals.details = allUserApps;
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
  try {
    const { email, pass } = req.body;
    logger.info(`registerUser(): Log in user `);
    const userInDB = usersDB.users.find((user) => user.email === email);
    if (userInDB) {
      const allUserApps = appsDB.apps.filter(
        (apps) => apps.userId === userInDB.userId,
      );
      logger.info(
        `registerUser(): User with userId - ${userInDB.userId} - found with details - ${JSON.stringify(allUserApps)} `,
      );
      res.locals.details = allUserApps;
      return next();
    } else {
      throw new AppError(`User with ${email} not found`, 403);
    }
  } catch (error) {
    logger.error(`registerUser(): Login Exception - ${JSON.stringify(error)}`);
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

import axios from "axios";
import dotenv from "dotenv";
import { logger } from "../utilities/logger.js";
import { AppError } from "../utilities/AppError.js";
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

const addNewUser = (req) => {};

export { getUsers, addNewUser };

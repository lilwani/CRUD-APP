import { AppError } from "../utilities/AppError";
import { logger } from "../utilities/logger";

export const successHandler = (_req, res, next) => {
  logger.info(`Success handler called`);
  if (res?.locals?.data) {
    return res.status(200).json({
      success: true,
      data: res.locals.details,
      error: null,
    });
  }
  next(
    new AppError(
      `successHandler(): Exception - No success data passed`,
      500,
      "No success data passed",
    ),
  );
};

export const errorHandler = (err, _req, res) => {
  return res.status(err.statusCode ?? 500).json({
    success: false,
    data: null,
    error: { message: err.message, details: err.details || null },
  });
};

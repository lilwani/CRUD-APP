import { AppError } from "../utilities/AppError.js";
import { logger } from "../utilities/logger.js";

export const successHandler = (_req, res, next) => {
  logger.info(`Success handler called`);
  if (res?.locals?.details) {
    if (res?.locals?.cookieToSend) {
      /*
        The cookies are sent with option httpOnly flag as true because we need to send refreshToken to client side but make sure they are not accessed by the javascript. So best way is to send them with this flag so they are sent everytime with a request but inaccessible by javascript and in extension a malicious user.
        We send accessToken but store it in inMemory like in state so the malicious user doesn't obtain it.
        The res.locals is sorta removed after the res is completed so no need to worry that is persists, similarly res.cookie
      */
      logger.info(`Response has cookies to send `);
      const { refTokDetails, exp } = res.locals.cookieToSend;
      res.cookie("refTokDetails", refTokDetails, {
        httpOnly: true,
        maxAge: exp,
      });
    }
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

export const errorHandler = (err, _req, res, _next) => {
  return res.status(err.statusCode ?? 500).json({
    success: false,
    data: null,
    error: { message: err.message, details: err.details || null },
  });
};

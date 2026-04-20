import dotenv from "dotenv";
import { logger } from "./logger.js";
import bcrypt from "bcrypt";
import { AppError } from "./AppError.js";
dotenv.config();

const generateHash = async (pass) => {
  const funcName = `generateHash(): `;
  try {
    logger.info(`${funcName} Hashing password `);
    /*
        This is not an encryption it is one way hashing.
        You has it using salt rounds and bcrypt version and when comparing use the same metadata to re-hash the received passwword comparing it with the hashedPassword store in db
    */
    const hashedPassword = await bcrypt.hash(
      pass,
      Number(process.env.SALT_ROUNDS),
    );
    logger.info(`${funcName} Hashed password generated `);
    return hashedPassword;
  } catch (error) {
    const errorMessage = `${funcName} Could not generate hashed password - ${JSON.stringify(error)}`;
    throw new AppError(errorMessage, error.statusCode ?? 500, error);
  }
};

const verifyPassword = async (pass, hashedPass) => {
  const funcName = `verifyPassword(): `;
  try {
    logger.info(`${funcName} Verifying password `);
    /*
        We simply pass the hashedPassword as it already has metadata about how the password was hashed in the first place 
        It has $10 which specifies number of salt rounds and $bcryptVersion
        Using these two data it can simply Re-hashes the plain password and if both are match returns true or false 
    */
    const isMatch = await bcrypt.compare(pass, hashedPass);
    logger.info(`${funcName} Password comparison status - ${isMatch}`);
    return isMatch;
  } catch (error) {
    const errorMessage = `${funcName} Failed to compare password - ${JSON.stringify(error)}`;
    throw new AppError(errorMessage, error.statusCode ?? 500, error);
  }
};

export { generateHash, verifyPassword };

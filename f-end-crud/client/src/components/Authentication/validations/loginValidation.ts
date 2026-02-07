import type { LoginFormikValidation } from "../LoginCard";

interface LoginErrorValidation extends LoginFormikValidation {}

export const validate = (values: LoginFormikValidation) => {
  const errors = {} as LoginErrorValidation;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  !values.username
    ? (errors.username = "Username Required")
    : values.username.length > 20 &&
      (errors.username = "Cannot have more than 20 characters");

  !values.email
    ? (errors.email = "Email Required")
    : !values.email.match(regex) && (errors.email = "Incorrect email");

  !values.password
    ? (errors.password = "Password Required")
    : values.password.length < 8 &&
      (errors.password = "Password should be at least 8 characters long");

  return errors;
};

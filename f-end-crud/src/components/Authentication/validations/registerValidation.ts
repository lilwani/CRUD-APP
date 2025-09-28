import type { RegisterFormikValues } from "../Register";

interface RegisterErrorValidation extends RegisterFormikValues {}

export const validate = (values: RegisterFormikValues) => {
  const errors = {} as RegisterErrorValidation;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  !values.username
    ? (errors.username = "Username Required")
    : values.username.length > 20 &&
      (errors.username = "Cannot have more than 20 characters");

  !values.email
    ? (errors.email = "Email Required")
    : values.email.match(regex) && (errors.email = "Incorrect email");

  !values.password
    ? (errors.password = "Password Required")
    : values.password.length < 8 &&
      (errors.password = "Password should be at least 8 characters long");

  !values.address && (errors.address = "Please enter your address");

  !values.contact
    ? (errors.contact = "Contact number required")
    : (isNaN(Number(values.contact)) || values.contact.length !== 10) &&
      (errors.contact = "Enter valid contact number");

  !values.skillset && (errors.skillset = "Please enter atleast one skillset");

  return errors;
};

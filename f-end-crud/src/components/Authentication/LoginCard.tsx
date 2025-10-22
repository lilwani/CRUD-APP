import "./LoginCard.module.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validate } from "./validations/loginValidation";
import { usePassword } from "./hooks/usePassword";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export interface LoginFormikValidation {
  username: string;
  email: string;
  password: string;
}

function LoginCard() {
  const { evaluateStrength, strength, getLabel } = usePassword();
  const formik = useFormik<LoginFormikValidation>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleLogin,
  });
  const debouncedPwd = useDebounce(formik.values.password);

  useEffect(() => {
    console.log("In useFfect");
    formik.touched.password && evaluateStrength(debouncedPwd);
    //  evaluateStrength(debouncedPwd);
  }, [debouncedPwd]);

  function handleLogin(values: LoginFormikValidation) {
    console.log("Logging User:", values);
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Password is :", event.target.value);
    formik.handleChange(event);
  };

  return (
    <div className="flex border-amber-900 border-2 rounded-xl justify-center h-full items-center">
      <form
        className="flex flex-col gap-4 border-black border-2 rounded-xl p-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-4">
          {/* Errors */}
          {Object.entries(formik.errors).length > 0 && (
            <div className="flex flex-col border-2 border-red-600 rounded-xl">
              <p className="text-red-700 text-center">
                ⛔ Please fix errors below ⛔
              </p>
              <div>
                {Object.entries(formik.errors).map(([key, val]) => (
                  <p className="text-sm text-red-600 pl-2" key={key}>
                    <span className="font-bold capitalize">{key}</span>:{"  "}
                    <span className="text-xs">{val}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Username */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24">Username</label>
            <input
              type="text"
              className="border-blue-400 border-2 rounded-lg placeholder-gray-300  py-1 flex-1 pl-3 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Email */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24">Email</label>
            <input
              type="email"
              className="border-blue-400 border-2 rounded-lg placeholder-gray-300  py-1 flex-1 pl-3 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@does.com"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Password */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24">Password</label>
            <input
              type="password"
              className="border-blue-400 border-2 rounded-lg placeholder-gray-300  py-1 flex-1 pl-3 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Atleast8_chars"
              id="password"
              onChange={passwordHandler}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {formik.touched.password && (
          <div className="flex flex-row items-center gap-4">
            <label className="w-24">Password Strength: {getLabel()}</label>
            <progress max={4} value={strength} />
          </div>
        )}

        <div className="flex flex-row justify-between">
          <input
            type="submit"
            className="px-4 py-2 bg-cyan-700 text-white rounded-xl hover:cursor-pointer"
            value="Login"
          />
          <input
            type="button"
            className="px-4 py-2 bg-cyan-700 text-white rounded-xl hover:cursor-pointer"
            value="Reset"
          />
        </div>

        <div>
          <Link to="/register" className="text-blue-400">
            Don't have an account?{" "}
            <span className="font-bold text-blue-600 hover:underline">
              Register here
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;

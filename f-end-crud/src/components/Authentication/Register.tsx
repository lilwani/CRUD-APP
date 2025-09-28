import { Link } from "react-router-dom";
import "./Register.module.css";
import { useFormik } from "formik";
import { validate } from "./validations/registerValidation";

export interface RegisterFormikValues {
  username: string;
  email: string;
  password: string;
  address: string;
  contact: string;
  skillset: string;
}

function Register() {
  const formik = useFormik<RegisterFormikValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      address: "",
      contact: "",
      skillset: "",
    },
    validate: validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleRegister,
  });

  function handleRegister(values: RegisterFormikValues) {
    console.log("Registering user:", values);
  }
  return (
    <div className="flex border-amber-900 border-2 rounded-xl justify-center h-full items-center">
      <form className="flex flex-col gap-4 border-black border-2 rounded-xl p-4 ">
        <div>
          <h2 className="font-sans">
            Welcome to{" "}
            <span className="font-extrabold bg-gradient-to-r from-red-300 to-green-500 bg-clip-text text-transparent">
              JobTrack
            </span>
            . Please fill below details
          </h2>
        </div>

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
            <label className="w-24" htmlFor="username">
              Fullname
            </label>
            <input
              type="text"
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Email */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@does.com"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Password */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=" Atleast8_chars"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Address */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="address">
              Address
            </label>
            <textarea
              rows={3}
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 pt-2 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123, Main Street, City, Country"
              id="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Contact */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="contact">
              Contact
            </label>
            <input
              type="text"
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 pt-2 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123-456-7890"
              id="contact"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Skill */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="skill">
              Add Skill
            </label>
            <input
              type="text"
              id="skill"
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React | Node.js | Python"
            />
          </div>

          {/* Skillset */}
          <div className="flex flex-row items-center gap-4">
            <label className="w-24" htmlFor="skillset">
              Skillset
            </label>
            <textarea
              rows={3}
              className="border-blue-400 border-2 rounded-lg py-1 flex-1 pl-3 pt-2 placeholder-gray-300 cursor-pointer shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="skillset"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <button className="px-4 py-2 bg-cyan-700 text-white rounded-xl hover:cursor-pointer">
            Register
          </button>
          <button className="px-4 py-2 bg-cyan-700 text-white rounded-xl hover:cursor-pointer">
            Reset
          </button>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-blue-400">
            Already a user?{" "}
            <span className="font-bold text-blue-600 hover:underline">
              Login here
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;

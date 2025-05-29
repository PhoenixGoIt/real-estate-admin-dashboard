import * as yup from "yup";

//=============================================================================\\
export const registerSchema = yup
  .object({
    name: yup.string().min(2).max(30).required("Name is required"),
    username: yup.string().min(2).max(30).required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  })
  .required();
//=============================================================================\\
export const loginSchema = yup
  .object({
    identifier: yup.string().required("Email/Username is required"),
    password: yup.string().min(6).required("Password is required"),
  })
  .required();
//=============================================================================\\
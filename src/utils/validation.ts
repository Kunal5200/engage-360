import * as yup from "yup";
export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required("Please Enter Email")
    .email("Please Enter Valid Email"),
  password: yup
    .string()
    .min(6, "Password must 6 characters")
    .required("Please Enter Password"),
});

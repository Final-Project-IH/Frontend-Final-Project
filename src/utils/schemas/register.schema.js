import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string("Email err").email("Invalid email").required("Required"),
  username: Yup.string("Username err").required("Required"),
  password: Yup.string("Password err")
    .min(8, "Length invalid")
    .required("Required"),
});

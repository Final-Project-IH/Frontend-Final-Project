import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string("Username err").required("Required"),
  password: Yup.string("Password err")
    .min(8, "Length invalid")
    .required("Required"),
});

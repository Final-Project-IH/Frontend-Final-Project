import * as Yup from "yup";

export const bidformSchema = Yup.object({
  offer: Yup
    .number("Should be a number")
    .required("Required")
});

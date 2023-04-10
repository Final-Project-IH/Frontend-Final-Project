import * as Yup from "yup";

export const offerSchema = Yup.object({
  offer: Yup.number("Offer should be a number").required("Required"),
});

import * as Yup from "yup";

export const productSchema = Yup.object({
  name: Yup.string("Name err").required("Required"),
  shortDescription: Yup.string("shortDescription err").required("Required"),
  description: Yup.string("description err").required("Required"),
  initialPrice: Yup.number("Enter price err").required("Required"),
  shipment: Yup.string("shipment err").required("Required"),
  category: Yup.string("category err").required("Required"),
});

//no tengo errores de lo que no es string porque no se ocomo

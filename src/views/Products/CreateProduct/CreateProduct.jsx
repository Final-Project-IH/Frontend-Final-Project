import React from "react";
import { useFormik } from "formik";
import FormControl from "../../../assets/Forms/FormControl";
import Input from "../../../assets/Forms/Input";
import { createProduct } from "../../../services/ProductService";
import { productSchema } from "../../../utils/schemas/product.schema";
import Select from "../../../assets/Forms/Select";
import {
  shipmentOptions,
  stateOptions,
  categoryOptions,
  subcategoryOptions,
} from "./categoriesData";
const now = new Date()
const initialValues = {
  name: "",
  shortDescription: "",
  description: "",
  state: "",
  image: "",
  shipment: "",
  category: "",
  subcategories: "",
  initialPrice: "",
  start: now,
  end: "",
};

const CreateProduct = () => {
  const pageOne = true;

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: productSchema,
    onSubmit: (values) => {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("shortDescription", values.shortDescription);
      formData.append("description", values.description);
      formData.append("state", values.state);
      formData.append("image", values.image);
      formData.append("shipment", values.shipment);
      formData.append("category", values.category);
      formData.append("subcategories", values.subcategories);
      formData.append("initialPrice", values.initialPrice);
      formData.append("start", values.start);
      formData.append("end", values.end);

      [...values.image].forEach((file, index) => {
        formData.append(`img-${index}`, file);
      });

      createProduct(formData)
        .then((response) => {
          console.log("******* ", response);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitting(false);
    },
  });

  let today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h1>Create Product</h1>
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormControl
            text="Name"
            error={touched.name && errors.name}
            htmlFor="name"
          >
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={touched.name && errors.name}
              placeholder="Enter product name..."
            />
          </FormControl>
          <FormControl
            text="Short Description"
            error={touched.shortDescription && errors.shortDescription}
            htmlFor="shortDescription"
          >
            <Input
              id="shortDescription"
              name="shortDescription"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shortDescription}
              error={touched.shortDescription && errors.shortDescription}
              placeholder="Enter product shortDescription..."
            />
          </FormControl>
          <FormControl
            text="Description"
            error={touched.description && errors.description}
            htmlFor="description"
          >
            <Input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={touched.description && errors.description}
              placeholder="Enter product description..."
            />
          </FormControl>
          <FormControl
            text="Image"
            error={touched.image && errors.image}
            htmlFor="image"
          >
            <input
              id="image"
              name="image"
              type="file"
              multiple
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files);
              }}
            />
          </FormControl>
          <FormControl
            text="Initial Price"
            error={touched.initialPrice && errors.initialPrice}
            htmlFor="initialPrice"
          >
            <Input
              id="initialPrice"
              name="initialPrice"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.initialPrice}
              error={touched.initialPrice && errors.initialPrice}
              placeholder="Enter product initialPrice..."
            />
          </FormControl>
          <FormControl
            text="state"
            error={touched.state && errors.state}
            htmlFor="state"
          >
            <Select
              id="State"
              name="state"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
              error={touched.state && errors.state}
              options={stateOptions}
            />
          </FormControl>

          <FormControl
            text="Shipment"
            error={touched.shipment && errors.shipment}
            htmlFor="shipment"
          >
            <Select
              id="shipment"
              name="shipment"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shipment}
              error={touched.shipment && errors.shipment}
              options={shipmentOptions}
            />
          </FormControl>
          <FormControl
            text="category"
            error={touched.category && errors.category}
            htmlFor="category"
          >
            <Select
              id="category"
              name="category"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              error={touched.category && errors.category}
              options={categoryOptions}
            />
          </FormControl>

          <FormControl
            text="subcategories"
            error={touched.subcategories && errors.subcategories}
            htmlFor="subcategories"
          >
            <Select
              id="subcategories"
              name="subcategories"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subcategories}
              error={touched.subcategories && errors.subcategories}
              disabled={values.category === ""}
              options={subcategoryOptions[values.category]}
            />
          </FormControl>

          {/* <FormControl
            text="start"
            error={touched.start && errors.start}
            htmlFor="start"
          >
            <Input
              id="start"
              name="start"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.start}
              error={touched.start && errors.start}
              placeholder="Enter product start..."
            />
          </FormControl> */}
          <FormControl
            text="end"
            error={touched.end && errors.end}
            htmlFor="end"
          >
            <Input
              id="end"
              name="end"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.end}
              error={touched.end && errors.end}
              placeholder="Enter product end..."
              min={today}
            />
          </FormControl>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

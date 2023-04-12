import { useFormik } from "formik";
import FormControl from "../../assets/Forms/FormControl";
import Input from "../../assets/Forms/Input";
import { createBid } from "../../services/ProductService";
import { bidformSchema } from "../../utils/schemas/bidform.schema";

const BidForm = ({ lastOffer, id }) => {
  const initialValues = {
    offer: `${lastOffer}`,
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setErrors
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: bidformSchema,
    onSubmit: (values) => {
      if (values.offer <= lastOffer) {
        setErrors({ offer: "Should be Greater than last offer"})
        setSubmitting(false);
        return 
      }
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);

      createBid(id, values.offer)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setSubmitting(false);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl
          text="Set your bid"
          error={touched.offer && errors.offer}
          htmlFor="offer"
        >
          <Input
            id="offer"
            name="offer"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.offer}
            error={touched.offer && errors.offer}
            placeholder=""
            type="number"
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
  );
};

export default BidForm;

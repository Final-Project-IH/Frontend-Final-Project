import { useFormik } from "formik";
import FormControl from "../../assets/Forms/FormControl";
import Input from "../../assets/Forms/Input";
import { offerSchema } from "../../utils/schemas/offer.schema";
import { createBid } from "../../services/ProductService";

const BidForm = ({ lastOffer }) => {
  const initialValues = {
    offer: `${lastOffer}`,
  };
  console.log(lastOffer);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: offerSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);

      createBid(values)
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

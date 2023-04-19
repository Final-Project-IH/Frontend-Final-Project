import { useFormik } from "formik";
import FormControl from "../../assets/Forms/FormControl";
import Input from "../../assets/Forms/Input";
import { createBid } from "../../services/ProductService";
import { bidformSchema } from "../../utils/schemas/bidform.schema";
import "./BidForm.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../assets/Modal/Modal";
import { useState } from "react";
// import { useContext } from "react";
// import AuthContext from "../../../contexts/Auth.context";

// const { currentUser } = useContext(AuthContext);

const BidForm = ({ lastOffer, id }) => {
  const initialValues = {
    offer: `${lastOffer}`,
  };

  const navigate = useNavigate();

  const [ModalisOpen, setModalisOpen] = useState(false);

  const handleOpenModal = () => {
    setModalisOpen(true);
  };

  const handleCloseModal = () => {
    setModalisOpen(false);
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
    setErrors,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: bidformSchema,
    onSubmit: (values) => {
      if (values.offer <= lastOffer) {
        setErrors({ offer: "Should be Greater than last offer" });
        setSubmitting(false);
        return;
      }
      const result = window.confirm(
        `Are you sure that you want to push with ${values.offer}€`
      );
      // setTimeout(() => {
      //   setSubmitting(false);
      // }, 1000);
      if (result) {
        createBid(id, values.offer)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
            navigate("/login")
          });
      }
      setSubmitting(false);
    },
  });
  console.log(ModalisOpen);
  return (
    <div className="d-flex">
      <form onSubmit={handleSubmit}>
        <FormControl
          text="Your Bid:"
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
          className="btn btn-primary btn-bid "
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

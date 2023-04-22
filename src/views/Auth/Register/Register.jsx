import { useFormik } from "formik";
import FormControl from "../../../assets/Forms/FormControl";
import Input from "../../../assets/Forms/Input";
import { register } from "../../../services/Auth.service";
import { registerSchema } from "../../../utils/schemas/register.schema";
import { useNavigate } from "react-router-dom";
import "./../Login/Login.css"

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setSubmitting,
    setFieldError,
  } = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      /* setTimeout(() => {    
            setSubmitting(false)
          }, 2000); */

      register({
        email: values.email,
        username: values.username,
        password: values.password,
      })
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            setFieldError("email", err?.response?.data?.message);
          } else {
            setFieldError("email", err.message);
          }
          setSubmitting(false);
        });
    },
  });

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1>Register</h1>
        <div className='login-form mt-5'>
        <form onSubmit={handleSubmit}>
          <FormControl
            text="Username"
            error={touched.username && errors.username}
            htmlFor="username"
          >
            <Input
              id="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={touched.username && errors.username}
              placeholder="Your username here..."
            />
          </FormControl>

          <FormControl
            text="Email"
            error={touched.email && errors.email}
            htmlFor="email"
          >
            <Input
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && errors.email}
              placeholder="Your email here..."
            />
          </FormControl>

          <FormControl
            text="Password"
            error={touched.password && errors.password}
            htmlFor="password"
          >
            <Input
              id="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password}
              placeholder="Your password here..."
              type="password"
            />
          </FormControl>

          <button className="btn btn-primary btn-login" type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

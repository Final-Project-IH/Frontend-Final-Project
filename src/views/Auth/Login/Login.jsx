
import { useFormik } from 'formik';
import { useContext } from "react";
import FormControl from '../../../assets/Forms/FormControl';
import Input from '../../../assets/Forms/Input';
import { loginSchema } from '../../../utils/schemas/login.schema';
import { login as loginService } from "./../../../services/Auth.service";
import AuthContext from "../../../contexts/Auth.context";
import { setAccessToken } from "../../../stores/AccessTokenStore";
import { Navigate } from 'react-router-dom';


const initialValues = {
    username: '',
    password: ''
  }

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/" />;
  }
    const {
        values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit, setSubmitting, setFieldError
      } = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: loginSchema,
        onSubmit: (values) => {
          setTimeout(() => {    
            setSubmitting(false)
          }, 2000);
          loginService({ username: values.username, password: values.password }) 
        .then((response) => {
          login(response.accessToken);
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            setFieldError("username", err?.response?.data?.message);
          } else {
            setFieldError("username", err.message);
          }
          setSubmitting(false);
        });

        }
      });

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
        <FormControl text="Username" error={touched.email && errors.email} htmlFor="username">
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

        <FormControl text="Password" error={touched.password && errors.password} htmlFor="password">
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

        <button className="btn btn-primary" type="submit">
          {isSubmitting
            ? 'Submitting...'
            : 'Submit'
          }
        </button>
      </form>
        </div>
    );
};

export default Login;
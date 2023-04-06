
import { useFormik } from 'formik';
import FormControl from '../../../assets/Forms/FormControl';
import Input from '../../../assets/Forms/Input';
import { loginSchema } from '../../../utils/schemas/login.schema';


const initialValues = {
    username: '',
    password: ''
  }

const Login = () => {

    const {
        values, errors, touched, handleChange, handleBlur, isSubmitting, handleSubmit, setSubmitting
      } = useFormik({
        initialValues: initialValues,
        validateOnBlur: true,
        validateOnChange: false,
        validationSchema: loginSchema,
        onSubmit: (values) => {
          setTimeout(() => {    
            setSubmitting(false)
          }, 2000);
    
          // Peticion al back para que me devuelva el JWT
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

// export default Login;
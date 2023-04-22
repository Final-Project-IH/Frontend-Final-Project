import { useFormik } from "formik"
import { useContext } from "react"
import AuthContext from "../../../contexts/Auth.context";
import { useNavigate } from "react-router-dom"
import FormControl from "../../../assets/Forms/FormControl";
import Input from "../../../assets/Forms/Input";
import { editTheProfile, getCurrentUser } from "../../../services/User.service"
import "./EditProfile.css"

const EditProfile = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext)
	const navigate = useNavigate()

	const initialValues = {
		username: currentUser?.username,
		image: currentUser?.image,
		bio: currentUser?.bio
	}

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
		setFieldValue,
	} = useFormik({
		initialValues: initialValues,
		validateOnBlur: true,
		validateOnChange: false,
		onSubmit: (values) => {
			const formData = new FormData()

			formData.append("username", values.username)
			formData.append("image", values.image)
			formData.append("bio", values.bio)

			editTheProfile(formData)
				.then(() => {
				getCurrentUser()
				.then((user)=>{
					setCurrentUser(user)
					navigate("/users/me")
				})
				})
				.catch((err) => {
					if (err?.response?.data?.errors) {
						Object.keys(err.response.data.errors).forEach((key) => {
							setFieldError(key, err.response.data.errors[key])
						})
					}
					setSubmitting(false)
				})
		},
	})

	return (
		<div>
		{currentUser ? 
			<div className='d-flex flex-column align-items-center'>
			<h1>Update your profile</h1>
			<div className='updateprofile-form mt-5'>
			<form onSubmit={handleSubmit}>
				<FormControl
					text='Username'
					error={touched.username && errors.username}
					htmlFor='username'
				>
					<Input
						id='username'
						name='username'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.username}
						error={touched.username && errors.username}
						placeholder='Change your username...'
					/>
				</FormControl>

				<FormControl
					text='Bio'
					error={touched.bio && errors.bio}
					htmlFor='bio'
				>
					<Input
						id='bio'
						name='bio'
						type='textarea'
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.about}
						error={touched.about && errors.about}
						placeholder='Tell us something about you...'
					/>
				</FormControl>

				<FormControl
					text='Image'
					error={touched.image && errors.image}
					htmlFor='image'
				>
					<Input
						id='image'
						type='file'
						name='image'
						onChange={(event) => {
							setFieldValue("image", event.currentTarget.files[0])
						}}
						onBlur={handleBlur}
						error={touched.img && errors.img}
						placeholder='Upload your image...'
					/>
				</FormControl>

				<button
					className='btn btn-primary btn-update'
					type='submit'
					disabled={isSubmitting}
					
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</form>
			</div>
			</div>
			:
			<p>Loading your user info...</p>
		}
		</div>
		
	)
}

export default EditProfile;

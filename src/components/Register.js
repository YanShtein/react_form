import { useFormik } from 'formik';
import * as Yup from 'yup';
import useResponse from '../useResponse';

export default function Register() {
  const { submit, isLoading, response } = useResponse();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Please enetr a valid password')
        .required('Required'),
    }),
    
    onSubmit: (values, { resetForm }) => {
      console.log({Register: values});
      submit(formik.values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className='new-account'>Create a new account</h1>
      <div className='form_section'>
        <label 
          htmlFor='firstName' 
          className='required'>First Name
        </label>
        <input 
          id='firstName'
          type='text'
          placeholder='First Name'
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? 
          <small>{formik.errors.firstName}</small> : null}
      </div>
      <div className='form_section'>
        <label 
          htmlFor='lastName' 
          className='required'>Last Name
        </label>
        <input 
          id='lastName'
          type='text'
          placeholder='Last Name'
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? 
          <small>{formik.errors.firstName}</small> : null}
      </div>
      <div className='form_section'>
        <label 
          htmlFor='email' 
          className='required'>Email
        </label>
        <input 
          id='email'
          type='email'
          placeholder='example@email.com'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? 
          <small>{formik.errors.email}</small> : null}
      </div>
      <div className='form_section'>
        <label htmlFor='password'>Password</label>
        <input 
          id='password'
          type='password'
          placeholder='min 8 characters'
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? 
          <small>{formik.errors.password}</small> : null}
      </div>
      <div className='submit'>
        <button type='submit'>Create account</button>
        {response ? <p>Registered succefully!</p> : null}
      </div>
    </form>
  )
};
import { useFormik } from 'formik';
import { useEffect } from 'react';
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
        .min(8, 'Must be between 8 - 12 characters.')
        .max(12, 'Must be between 8 and 12 characters.')
        .matches(/[0-9a-zA-z!@#$%^&*]/, 'Password not match rules.')
        .required('Required'),
    }),
    
    onSubmit: (values) => {
      console.log({Register: values});
      submit(formik.values);
    }
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      formik.resetForm();
    }
  }, [response]);

  // register check if email exist
  
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
          <small className='errors'>{formik.errors.firstName}</small> : null}
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
        {formik.touched.lastName && formik.errors.lastName ? 
          <small className='errors'>{formik.errors.lastName}</small> : null}
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
          <small className='errors'>{formik.errors.email}</small> : null}
      </div>
      <div className='form_section'>
        <label 
          htmlFor='password'
          className='required'>Create Password
        </label>
        <input 
          id='password'
          type='password'
          placeholder='Password'
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? 
          <small className='errors'>{formik.errors.password}</small> : null}
        <div className='password'>
          <small>Password must be:</small>
          <small>• Between 8 - 12 characters.</small>
          <small>• At least one of the following:</small>
          <small>- An upper case character</small>  
          <small>- A lower case character</small>  
          <small>- A special character</small>  
          <small>- A number</small>  
        </div>
      </div>
      <div className='submit'>
        <button type='submit'>
          {isLoading ? 'Loading...' : 'Create account'}
        </button>
        <p>{response && 'Success!'}</p>
        {/* {response.type === 'success' ? <p>{response.message}</p> : <p>{response.message}</p>} */}
      </div>
    </form>
  )
};
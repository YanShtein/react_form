import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import useResponse from '../useResponse';

export default function Login() {
  const { submit, isLoading, response } = useResponse();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Please enetr a valid password')
        .required('Required'),
    }),
    
    onSubmit: (values, { resetForm }) => {
      console.log({Login: values});
      submit(formik.values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='form_section'>
        <label htmlFor='email'>Email</label>
        <input 
          id='email'
          type='email'
          autoComplete=''
          placeholder='example@example.com'
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
          placeholder='Password'
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? 
          <small>{formik.errors.password}</small> : null}
      </div>
      <div className='submit'>
        <button type='submit'>
          {isLoading ? 'Loading...' : 'Login to your account'}
        </button>
        {response ? <p>Logged in!</p> : null}
      </div>
    </form>
  )
};
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import useLogin from '../useLogin';

export default function Login() {
  const { response, submitLogin } = useLogin();

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
        .min(8, 'Min 8 characters.')
        .required('Required'),
    }),
    
    onSubmit: (values) => {
      console.log({Login: values});
      submitLogin(values.email, values.password);
    }
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      formik.resetForm();
    }
  }, [response])

  // login if email but not password

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
          <small className='errors'>{formik.errors.email}</small> : null}
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
          <small className='errors'>{formik.errors.password}</small> : null}
      </div>
      <div className='submit'>
        <button type='submit'>
          Login to your account
        </button>
        {
          response === null ? null :
          <p>{response.message}</p>
        }
      </div>
    </form>
  )
};
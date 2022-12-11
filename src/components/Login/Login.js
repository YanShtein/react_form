import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';
import useLogin from './useLogin';

export default function Login() {
  const { response, submitLogin, isLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('The username or password you entered is incorrect, please try again.')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),
    
    onSubmit: (values) => {
      console.log({Login: values});
      submitLogin(values.email, values.password);
    }
  });

  function handleKeyPress(e) {
    if (e.keyCode === 13) { 
      e.target.blur();
    }
  }

  useEffect(() => {
    if (response && response.type === 'success') {
      formik.resetForm();
    }
  }, [response])

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
          onKeyUp={handleKeyPress}
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
          onKeyUp={handleKeyPress}
        />
        {formik.touched.password && formik.errors.password ? 
          <small className='errors'>{formik.errors.password}</small> : null}
      </div>
      <div className='submit'>
        <button type='submit'>
          {isLoading ? 'Loading...' : 'Login to your account'}
        </button>
        {
          response === null ? null :
          response.type === 'error' ? 
          <p className='errors'>{response.message}</p> :
          <p>{response.message}</p>
        }
      </div>
    </form>
  )
};
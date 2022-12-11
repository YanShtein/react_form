// import { Input, Stack, FormLabel, VStack, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

export default function App() {
  const [component, setComponent] = useState('login');

  return (
    <div className='container'>
      <div className='form'>
        <div className='select_comp'>
          <h1 
            onClick={() => setComponent('login')}
            className={component === 'login' ? 'selected' : null}>Login</h1>
          <h1 
            onClick={() => setComponent('register')}
            className={component === 'register' ? 'selected' : null}>Register</h1>
        </div>
        {
          component === 'login' ? <Login /> : <Register />
        }
      </div>
    </div>
  );
}
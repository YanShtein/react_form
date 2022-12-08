// import { Input, Stack, FormLabel, VStack, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  const [component, setComponent] = useState('login');
  const [selected, setSelected] = useState('select-login');

  return (
    <div className='container'>
      <div className='form'>
        <div className='select_comp'>
          <h1 
            onClick={() => {
              setComponent('login');
              setSelected('select-login')
            }}
            className={selected === 'select-login' ? 'selected' : null}>Login</h1>
          <h1 
            onClick={() => {
              setComponent('register');
              setSelected('select-register')
            }}
            className={selected === 'select-register' ? 'selected' : null}>Register</h1>
        </div>
        {
          component === 'login' ? <Login /> : <Register />
        }
      </div>
    </div>
  );
}
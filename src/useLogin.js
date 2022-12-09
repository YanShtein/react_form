import { useState } from "react";
import users from "./loginData";

// function validateLogin(email, password) {

//   let isExist = users.filter(user => {
//     return user.email === email && user.password === password;
//   });

//   return new Promise((resolve, reject) => {
//     if (isExist.length > 0) {
//       resolve(console.log(`${email} logged in succefully!`))
//     } else {
//       reject(new Error(console.log(`${email} doesnt exist!`)))
//     }
//   })
// };

// export default isLoginValid;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useLogin = () => {
  const [response, setResponse] = useState(null);

  const submitLogin = async (email, password) => {

    let isExist = users.filter(user => {
      return user.email === email && user.password === password;
    });

    try {
      await wait(2000);
      if (isExist.length > 0) {
        setResponse({
          type: 'success',
          message: `${email} logged in succefully!`,
        })
      } else {
        setResponse({
          type: 'error',
          message: `${email} doesnt exist!`,
        })
      }
    } catch (error) {
      return new Error('Something went wrong!')
    } finally {
      console.log('Session ended.')
    };
  };

  return { response, submitLogin };
};

export default useLogin;
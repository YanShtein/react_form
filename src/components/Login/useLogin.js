import { useState } from "react";
import users from "../../usersDB";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useLogin = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const submitLogin = async (email, password) => {

    let isExist = users.filter(user => {
      return user.email === email && user.password === password;
    });

    setLoading(true);
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
          message: `The username or password you entered is incorrect, please try again.`,
        })
      }
    } catch (error) {
      return new Error('Something went wrong!')
    } finally {
      setLoading(false);
      console.log('Session ended.')
    };
  };

  return { response, isLoading, submitLogin };
};

export default useLogin;
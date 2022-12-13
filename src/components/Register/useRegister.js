import { useState } from "react";
import users from "../../usersDB";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useRegister = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const submitRegister = async (email) => {

    let isExist = users.filter(user => {
      return user.email === email;
    });

    setLoading(true);
    try {
      await wait(2000);
      if (isExist.length > 0) {
        console.log(`${email} already exists in DB.`)
        setResponse({
          type: 'error',
          message: `${email} already exists.`,
        })
      } else {
        setResponse({
          type: 'success',
          style: {
            border: '1px solid red',
            padding: '5px',
            borderRadius: '6px',
          },
          message: `An email with confirmation has been sent to ${email}!`,
        })
      }
    } catch (error) {
      return new Error('Something went wrong!')
    } finally {
      setLoading(false);
      console.log('Session ended.')
    };
  };

  return { response, isLoading, submitRegister };
};

export default useRegister;
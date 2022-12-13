# react_form

A React form project using Formik library for form handling and Yup library that allows validation of field inputs through a validation schema.

The form consists of two components each of which sends a request with the data attached to a simulated server which performs validation against the received data.

Form fields are validated against a set of rules, or if field is required.

Login component functionality:
1. Enter an email and a password.
2. Clicking the login button sends data to the server and shows loading indicator while data is being validated.
3. The server validates credentials against users DB.
- credentials correct ? success meassage is shown.
- credentials check failed ? error message is shown nofitying the user that email or password is incorrect.

Register component functionality:
1. New user creates account, entering name & last name.
2. While entering email, it goes through email integrity validation.
3. Password entered, checked if it meets conditions.
4. Pressing create account button sends email string to the server to check whether such email already exists in DB.
- email exists ? a message shows notifying the email already exists.
- new email ? a success message shown.

Directory Structure: <hr/>

- src
  - components/
    - Login/
      - Login.js
      - useLogin.js (Server - custom Hook checks Login credentials)
    - Register/
      - Register.js
      - useRegister.js (Server - custom Hook checks Registration validity)
  - usersDB.js
  - App.js
  - index.css
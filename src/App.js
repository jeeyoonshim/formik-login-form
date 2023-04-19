import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }, onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'username should be an email';
      }
      if (!values.password) errors.password = "field required";
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id = "emailField" name="email" type="text" onChange={formik.handleChange} value ={formik.values.email}/>
        <div id="emailError">{formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}</div>
        <div>Password:</div>
        <input id ="pswField" name="password" type="text" onChange={formik.handleChange} value ={formik.values.password}/>
        <div id="pswError">{formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div> : null}</div>
        <button id="submitBtn" type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default App;

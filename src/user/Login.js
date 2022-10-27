import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    let result = localStorage.getItem(formData);

    if (result === true) {
      return (
        <div>
          <h2>Welcome Back!</h2>;
        </div>
      );
    } else {
      return (
        <div>
          <h2>Incorrect username or password</h2>
        </div>
      );
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Log In</h3>
        <div>
          <TextField
            label="Username"
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleChange}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Login from "./Login";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const [flag, setFlag] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("setname", JSON.stringify(name));
      localStorage.setItem("setusername", JSON.stringify(username));
      localStorage.setItem("setpassword", JSON.stringify(password));
      console.log("Saved in Local Storage");
      // <h1>Thank you {name}, you are successfully registered!</h1>;
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div>
      {""}
      {login ? (
        <form onSubmit={handleFormSubmit}>
          <h2>Signup</h2>
          <TextField
            label="Username"
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <TextField
            label="Name"
            type="text"
            placeholder="Enter your Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />

          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
          <p>
            Already registered?{" "}
            <a href="/login" onClick={handleClick}>
              Login
            </a>
          </p>
          {flag && <Alert severity="error">Please fill in every field</Alert>}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Signup;

// const Signup = ({ db }) => {
//   const [names, setNames] = useState({ name: "" });
//   const [usernames, setUsernames] = useState({ username: "" });
//   const [passwords, setPasswords] = useState({ password: "" });

//   useEffect(() => {
//     db.version(1).stores({ formData: "id, value" });

//     db.transaction("rw", db.formData, async () => {
//       const dbName = await db.formData.get("name");
//       const dbUsername = await db.formData.get("username");
//       const dbPassword = await db.formData.get("password");

//       if (!dbName) await db.formData.add({ id: "name", value: "" });
//       if (!dbUsername) await db.formData.add({ id: "username", value: "" });
//       if (!dbPassword) await db.formData.add({ id: "password", value: "" });

//       setNames({
//         name: dbName ? dbName.value : "",
//       });
//       setUsernames({
//         username: dbUsername ? dbUsername.value : "",
//       });
//       setPasswords({
//         password: dbPassword ? dbPassword.value : "",
//       });
//     }).catch((e) => {
//       console.log(e.stack || e);
//     });
//     return () => db.close();
//   }, [db]);

//   const setName = (id) => (value) => {
//     db.formData.put({ id, value });
//     setNames((prevNames) => ({ ...prevNames, [id]: value }));
//   };
//   const setUsername = (id) => (value) => {
//     db.formData.put({ id, value });
//     setUsernames((prevUsernames) => ({ ...prevUsernames, [id]: value }));
//   };
//   const setPassword = (id) => (value) => {
//     db.formData.put({ id, value });
//     setPasswords((prevPasswords) => ({ ...prevPasswords, [id]: value }));
//   };

//   const handleSetName = (id) => (e) => setName(id)(e.target.value);
//   const handleSetUsername = (id) => (e) => setUsername(id)(e.target.value);
//   const handleSetPassword = (id) => (e) => setPassword(id)(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName("name");
//     setUsername("username");
//     setPassword("password");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <span>Name:</span>
//       <br />
//       <input type="text" name="name" onChange={handleSetName("name")} />
//       <br />
//       <span>Username:</span>
//       <br />
//       <input
//         type="text"
//         name="Username"
//         onChange={handleSetUsername("username")}
//       />
//       <br />
//       <span>Password:</span>
//       <br />
//       <input
//         type="text"
//         name="Password"
//         onChange={handleSetPassword("password")}
//       />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

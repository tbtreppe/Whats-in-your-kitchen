import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./user/UserContext";
import Container from "@mui/material/Container";
import "./Home.css";

function Home() {
  const currentUser = useContext(UserContext);
  return (
    <Container maxWidth="sm">
      <h1>What's in your Kitchen?</h1>
      {currentUser ? (
        <h2>Welcome Back, {currentUser.name || currentUser.username}!</h2>
      ) : (
        <p>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </p>
      )}
    </Container>
  );
}
export default Home;

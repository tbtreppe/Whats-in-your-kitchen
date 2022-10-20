import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SearchIngredient from "./SearchIngredient";
import SearchRandom from "./SearchRandom";
import SearchCuisine from "./SearchCuisine";
import Recipe from "./Recipe";
import MyFavorites from "./MyFavorites";
import Signup from "./user/Signup";
import Login from "./user/Login";
import UserContext from "./user/UserContext";
import image from "./Images/pexels-lukas-616401.jpg";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  async function signup(signupData) {
    try {
      let logged = await login(signupData);
      setCurrentUser(logged);
      return { success: true };
    } catch (errors) {
      console.log("login failed", errors);
    }
  }

  async function login(loginData) {
    try {
      let logged = await login(loginData);
      setCurrentUser(logged);
      return { success: true };
    } catch (errors) {
      console.log("login failed", errors);
    }
  }
  const logout = () => {
    setCurrentUser(null);
    console.log("logout");
  };
  return (
    <div className="App">
      {/* <header className="App-header" style={{backgroundImage:`url(${image})`, backgroundSize: 'cover'}}> */}
      <header className="App-header">
        <div>
          <img src={image} className="Homepage-background" alt="background" />
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/SearchIngredient">
                <SearchIngredient />
              </Route>
              <Route exact path="/SearchRandom">
                <SearchRandom />
              </Route>
              <Route exact path="/SearchCuisine">
                <SearchCuisine />
              </Route>
              <Route exact path="/recipe/:id">
                <Recipe />
              </Route>
              <Route exact path="/MyFavorites">
                <MyFavorites />
              </Route>
              <Route exact path="/Signup">
                <Signup />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <UserContext.Provider value={currentUser}>
                <div>
                  <NavBar logout={logout} />
                  <Route login={login} signup={signup} />
                </div>
              </UserContext.Provider>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

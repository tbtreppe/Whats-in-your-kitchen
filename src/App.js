import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SearchIngredient from "./SearchIngredient";
import SearchRandom from "./SearchRandom";
import SearchCuisine from "./SearchCuisine";
import Recipe from "./Recipe";
import MyFavorites from "./MyFavorites";
import image from "./Images/pexels-lukas-616401.jpg";

function App() {
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
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

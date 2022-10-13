import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Search from "./SearchForm";
import SearchIngredient from "./SearchIngredient";
import SearchEquipment from "./SearchEquipment";
import SearchCuisine from "./SearchCuisine";
import Recipe from "./Recipe";
import image from "./Images/pexels-lukas-616401.jpg";
console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <div className="App">
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
              <Route exact path="/SearchEquipment">
                <SearchEquipment />
              </Route>
              <Route exact path="/SearchCuisine">
                <SearchCuisine />
              </Route>
              <Route exact path="/recipe/:id">
                <Recipe />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

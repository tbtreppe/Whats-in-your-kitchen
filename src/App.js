import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SearchIngredient from "./SearchIngredient";
import SearchEquipment from "./SearchEquipment";
import SearchCuisine from "./SearchCuisine";
console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's in your Kitchen?</h1>
        <div>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="Search By Ingredient">
                <SearchIngredient />
              </Route>
              <Route exact path="Search By Equipment">
                <SearchEquipment />
              </Route>
              <Route exact path="Search By Cuisine">
                <SearchCuisine />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

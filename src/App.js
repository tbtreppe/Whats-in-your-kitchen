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
        <div>
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
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;

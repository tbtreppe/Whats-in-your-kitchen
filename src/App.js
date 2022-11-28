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
import image from "./Images/pexels-tima-miroshnichenko-4805772 (1).jpg";

function App() {
  return (
    <div className="App">
      <img src={image} className="Homepage-background" alt="background" />
      <BrowserRouter>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <NavBar />
          <main
            style={{
              flex: "1 1 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          </main>
        </div>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}

export default App;

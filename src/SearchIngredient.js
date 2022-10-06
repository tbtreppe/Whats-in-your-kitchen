import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import Searched from "./SearchForm";
import RecipeResult from "./RecipeResult";
import axios from "axios";
import RecipeList from "./RecipeList";

function GetRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // const [query, setQuery] = useState([]);

  // useEffect(() => {
  //   SearchIngredient();
  // }, [query]);

  const SearchIngredient = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=2d3d04ef784549cb818fdb563237f29c&ingredients=${search}`
      );
      const data = response.data;
      console.log(data)
      setRecipes(data);
    } catch (err) {
      console.log(err, "logged");
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const doSearch = (e) => {
    e.preventDefault();
    SearchIngredient();
    // setQuery(search); //query?
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={doSearch}>
        <div>
          <label htmlFor="name">Search for item</label>
          <TextField
            id="outlined-basic"
            label="Enter an Item"
            variant="outlined"
            type="text"
            name="name"
            onChange={updateSearch}
            value={search} //query?
          />
        </div>
        <button onClick={doSearch}>Search</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default GetRecipe;

// `https://api.spoonacular.com/recipes/findByIngredients?apiKey=2d3d04ef784549cb818fdb563237f29c&ingredients=butter`

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
  const [query, setQuery] = useState("Butter");

  useEffect(() => {
    SearchIngredient();
  }, [query]);

  const SearchIngredient = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.response);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={getSearch}>
        <div>
          <label htmlFor="name">Search for item</label>
          <TextField
            id="outlined-basic"
            label="Enter an Item"
            variant="outlined"
            type="text"
            name="name"
            onChange={updateSearch}
            value={search}
          />
        </div>
        <Button variant="contained">Search</Button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default GetRecipe;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeList from "./RecipeList";

const SearchCuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const getCuisine = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=2d3d04ef784549cb818fdb563237f29c&cuisine=${search}`
      );
      const data = response.data;
      console.log(data);
      setRecipes(data.results);
    } catch (err) {
      console.log(err, "logged");
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const doSearch = (e) => {
    e.preventDefault();
    getCuisine();

    setSearch("");
  };

  return (
    <div>
      <form onSubmit={doSearch}>
        <div>
          <label htmlFor="name">Search by Cuisine</label>
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
        <Button variant="outlined" onClick={doSearch} className="Button">
          Search
        </Button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default SearchCuisine;

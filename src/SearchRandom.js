import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeList from "./RecipeList";
import "./SearchRandom.css";

function GetRandomRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const SearchIngredient = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=2d3d04ef784549cb818fdb563237f29c&tags=${search}&number=10`
      );
      const data = response.data;
      console.log(data);
      //   {
      //     "recipes": []
      // }
      setRecipes(data.recipes);
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

    setSearch("");
  };

  return (
    <div>
      <form onSubmit={doSearch} className="Form">
        <div>
          <label htmlFor="name" className="Label">
            What are you in the mood for?
          </label>
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
      {/* {recipes.length === 0 ? ( */}
      <RecipeList recipes={recipes} />
      {/* // ) : ( // <p className="lead">Sorry, no results were found!</p>
      // )} */}
    </div>
  );
}

export default GetRandomRecipe;

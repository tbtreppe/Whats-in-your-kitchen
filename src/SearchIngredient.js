import { React, useState } from "react";
import Searched from "./SearchForm";
import RecipeResult from "./RecipeResult";

function GetRecipe() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Butter");

  const SearchIngredient = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query`
    );
    const data = await response.json();
    response(data.resp);
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
          <input
            name="name"
            id="name"
            placeholder="Enter an item"
            onChange={updateSearch}
            value={search}
          />
        </div>
        <button>Search</button>
      </form>
    </div>
  );
}

export default GetRecipe;

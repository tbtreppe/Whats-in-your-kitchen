import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

export default function ColorTabs() {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flex: "0 1 auto",
      }}
    >
      <Tabs value={value} onChange={handleChange} className="Tabs">
        <Link to="/SearchIngredient" className="Ingredient" value="Ingredient">
          Search By Ingredient
        </Link>
        <Link to="/SearchRandom" className="Random" value="Random">
          Popular Recipes
        </Link>
        <Link to="/SearchCuisine" className="Cuisine" value="Cuisine">
          Search By Cuisine
        </Link>
        <Link to="/MyFavorites" className="Favorites" value="Favorites">
          My Favorites
        </Link>
      </Tabs>
    </Box>
  );
}

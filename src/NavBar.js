import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function ColorTabs() {
  const [value, setValue] = React.useState("Ingredient");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className="Tabs"
      >
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

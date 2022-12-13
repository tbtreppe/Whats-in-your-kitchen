import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Recipe.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const [storedRecipe, setStoredRecipe] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "{}")
  );

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=2d3d04ef784549cb818fdb563237f29c`
      );
      const data = response.data;
      console.log(data);
      setDetails(data);
    } catch (err) {
      console.log(err, "logged");
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);

  const saveRecipe = () => {
    if (!storedRecipe[details.id]) {
      const newFavoriteRecipe = { ...storedRecipe, [details.id]: details };
      setStoredRecipe(newFavoriteRecipe);
      localStorage.setItem("favorites", JSON.stringify(newFavoriteRecipe));
      console.log("***************", details);
      console.log("###########", newFavoriteRecipe);
    } else {
      console.log("added already");
      return <alert>already added!</alert>;
    }
  };

  const deleteFromFavorites = () => {
    const recipeIDToDelete = details.id;
    const favoritesRaw = localStorage.getItem("favorites");
    const favorites = JSON.parse(favoritesRaw);
    if (favorites[recipeIDToDelete]) {
      delete favorites[recipeIDToDelete];
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setStoredRecipe(favorites);
    }
  };

  return (
    <Box>
      <div className="RecipeInfo">
        <h2>{details.title}</h2>
        <img src={details.image} className="image" alt={details.title} />
        <h5 dangerouslySetInnerHTML={{ __html: details.diets }}></h5>
        <h5 dangerouslySetInnerHTML={{ __html: details.dishTypes }}></h5>
        {/* <p dangerouslySetInnerHTML={{ __html: details.summary }}></p> */}
        <Button variant="contained" className="Button">
          <a href={details.sourceUrl} className="Url">
            Go to Recipe website
          </a>
        </Button>
        <br />
        <br />
        {
          <Fab size="small" aria-label="like">
            {storedRecipe[details.id] ? (
              <DeleteIcon variant="outlined" onClick={deleteFromFavorites} />
            ) : (
              <FavoriteIcon href={"/MyFavorites"} onClick={saveRecipe} />
            )}
          </Fab>
        }
      </div>
    </Box>
  );
};
export default Recipe;

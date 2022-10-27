import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Redirect } from "react-router-dom";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  const [storedRecipe, setStoredRecipe] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const isFavorited = storedRecipe.includes(details);
  console.log("$$$$$$$$$$$$$$$$", isFavorited);

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
    const newFavoriteRecipe = [...storedRecipe, details];
    setStoredRecipe(newFavoriteRecipe);
    localStorage.setItem("favorites", JSON.stringify(newFavoriteRecipe));
    console.log("***************", details);
    console.log("###########", newFavoriteRecipe);
    // console.log("SAVE RECIPE TO LOCAL STORAGE");
    // localStorage.setItem("recipe", JSON.stringify(details));
    //<Redirect to="/MyFavorites" />;
    // redirect to /MyFavorites
  };

  const deleteFromFavorites = () => {
    const removeRecipe = JSON.parse(localStorage.getItem("favorites", details));
    setStoredRecipe([removeRecipe]);
  };

  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <h5 dangerouslySetInnerHTML={{ __html: details.diets }}></h5>
      <h5 dangerouslySetInnerHTML={{ __html: details.dishTypes }}></h5>
      <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      <a href={details.sourceUrl}>Go to Recipe website</a>
      {
        <Fab size="small" aria-label="like">
          {isFavorited ? (
            <DeleteIcon variant="outlined" onClick={deleteFromFavorites} />
          ) : (
            <FavoriteIcon href={"/MyFavorites"} onClick={saveRecipe} />
          )}
        </Fab>
      }
    </div>
  );
};

export default Recipe;

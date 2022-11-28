import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Recipe.css";

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
    let removeRecipe = { [details.id]: details };
    if (storedRecipe[removeRecipe]) {
      localStorage.removeItem(removeRecipe);
    }

    console.log("+++++++++++++++++++", removeRecipe);
    // let removeRecipe = JSON.parse(
    //   localStorage.getItem("favorites", storedRecipe)
    // );
    // for (let i = 0; i < removeRecipe.length; i++) {
    //   if (details.id == i) {
    //     removeRecipe.splice(i, 1);
    //   }
    // }
    // removeRecipe = JSON.stringify(removeRecipe);
    // localStorage.setItem("favorites", removeRecipe);

    // const removeRecipe = JSON.parse(
    //   localStorage.getItem("favorites", details.id)
    // );
    // if (removeRecipe) {
    //   localStorage.removeItem(removeRecipe);
    //   const newFavoriteList = { ...storedRecipe, [details.id]: details };
    //   setStoredRecipe(newFavoriteList);
    //   localStorage.setItem("favorites", JSON.stringify(newFavoriteList));
    // }

    // if (storedRecipe[details.id]) {
    //   const removeRecipe = { [details.id]: details };
    //   localStorage.removeItem(removeRecipe);
    // }
    //its getting removeRecipe as details.id but is not removing it.
    // const removeRecipe = JSON.parse(
    //   localStorage.getItem("favorites", details.id)
    // );
    // setStoredRecipe([removeRecipe]);
    // console.log("+++++++++++++++++", removeRecipe);
  };

  return (
    <div className="RecipeInfo">
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <h5 dangerouslySetInnerHTML={{ __html: details.diets }}></h5>
      <h5 dangerouslySetInnerHTML={{ __html: details.dishTypes }}></h5>
      <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      <a href={details.sourceUrl}>Go to Recipe website</a>
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
  );
};
export default Recipe;

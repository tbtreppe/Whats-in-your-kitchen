import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const params = useParams();

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

  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <h5 dangerouslySetInnerHTML={{ __html: details.diets }}></h5>
      <h5 dangerouslySetInnerHTML={{ __html: details.dishTypes }}></h5>
      <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      <a href={details.sourceUrl}>Go to Recipe website</a>
      <IconButton
        href={`/MyFavorites`}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};

export default Recipe;

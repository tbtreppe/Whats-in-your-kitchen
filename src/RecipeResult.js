import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeResult = () => {
  const [details, setDetails] = useState({});

  const params = useParams();

  const fetchDetails = async () => {
    const resp = axios.get(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`
    );
    const data = await resp.json();
    return data;
  };

  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <h3>{details.ingredients}</h3>
      <p>{details.instructions}</p>
    </div>
  );
};

export default RecipeResult;

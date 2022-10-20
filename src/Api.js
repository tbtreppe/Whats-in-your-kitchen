import axios from "axios";
import REACT_APP_API_KEY from "./src/env.local";

const BASE_API_URL = "https://api.spoonacular.com/recipes";

export async function fetchRecipes(type) {
  let res = await axios.get(`${BASE_API_URL}/${type}?${REACT_APP_API_KEY}`);
  return res.data;
}

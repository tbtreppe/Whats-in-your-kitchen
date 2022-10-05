import React from "react";
import Recipe from "./Recipe";

function RecipeList(props) {
  const { recipes } = props;

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.label}
          title={recipe.label}
          image={recipe.image}
          ingredients={recipe.ingredients}
          directions={recipe.url}
        />
      ))}
    </div>
  );
}

export default RecipeList;

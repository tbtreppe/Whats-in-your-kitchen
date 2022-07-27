import React from "react";
import Recipe from "./Recipe";

function RecipeList(props) {
  const { recipes } = props;

  return (
    <div>
      {recipes.map((recipes) => (
        <Recipe
          key={recipes.recipe.label}
          title={recipes.recipe.label}
          image={recipes.recipe.image}
          ingredients={recipes.recipe.ingredients}
          directions={recipes.recipe.url}
        />
      ))}
    </div>
  );
}

export default RecipeList;

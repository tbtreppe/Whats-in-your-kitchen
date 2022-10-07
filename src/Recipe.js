import React from "react";

const Recipe = ({ title, image, ingredients, directions }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* {ingredients.map((ingredients, i) => (
        <li key={i}>{ingredients.text}</li>
      ))} */}
      <img src={image} alt="" />
      <p>{directions}</p>
    </div>
  );
};

export default Recipe;

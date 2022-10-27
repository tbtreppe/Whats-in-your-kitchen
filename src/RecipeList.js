import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function RecipeList(props) {
  const { recipes } = props;
  console.log(
    "🚀 ~ file: RecipeList.js ~ line 11 ~ RecipeList ~ recipes",
    recipes
  );

  return (
    <ImageList sx={{ width: 900 }}>
      {recipes.map(({ title, id, image }) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=248&fit=crop&auto=format`}
            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            title={title}
            actionIcon={
              <IconButton
                size="medium"
                href={`/recipe/${id}`}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default RecipeList;

import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function RecipeList(props) {
  const { recipes } = props;
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

// function RecipeList(props) {
//   const { recipes } = props;

//   return (
//     <div>
//       {recipes.map(({ title, id, image }) => (
//         <Link to={`/recipe/${id}`}>
//           <img src={image} alt={title} />
//           <h4>{title}</h4>
//         </Link>
//         // <Recipe key={recipe.id} title={recipe.title} image={recipe.image} />
//       ))}
//     </div>
//   );
// }

export default RecipeList;

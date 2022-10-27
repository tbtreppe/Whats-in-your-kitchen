import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

function FavoriteList() {
  console.log(
    "🚀 ~ file: MyFavorites.js ~ line 11 ~ FavoriteList ~ recipes",
    getFavorites
  );

  const getFavorites = JSON.parse(localStorage.getItem("favorites"));
  if (getFavorites === null) {
    return <h1>No recipes saved</h1>;
  }

  return (
    <div>
      <h1>My Favorite Recipes</h1>
      <ImageList sx={{ width: 900 }}>
        {getFavorites.map(({ title, id, image }) => (
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
    </div>
  );
}

export default FavoriteList;

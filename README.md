# What's in Your Kitchen

## Introduction

What's in your Kitchen is a consumer driven webpage. The goal is for the user to be able to input into a form what they would like to make, whether it be an ingredient they have, a cuisine they are in the mood for, or they just want to search for popular recipes. The website will then return recipes the user can make based on what they submitted in the form. The user will also also have the ability to save the recipe to a favorites page and delete it from this page if they no longer want to have it favorited.

## Users

The site will be accessible for anyone who wants to find a recipe based on preselected information.

## Data

This webpage will use the [Spoonacular](https://spoonacular.com/food-api) API.

## Approach

Application will be Frontend only using-

- React
- CSS
- Material UI
- Local Storage

#### Hosting

Application will be hosted on Netlify

#### Features

##### Search by Ingredient

- Users are able to input an ingredient into a form and after clicking submit, will see a list of recipes that include that ingredient. The user can click on any recipe to see more information and click on the "Go to website" link to see the full recipe webpage with ingredients and instructions. User has the option to favorite the recipe (put in local storage).

##### Search by Cuisine

- Users are able to input a cuisine into the form and after clicking submit, will see a list of recipes that pertain to the submitted cuisine. The user can click on any recipe to see more information and click on the "Go to website" link to see the full recipe webpage with ingredients and instructions. User has the option to favorite the recipe (put in local storage).

##### Search Randomly

- Users can search for whatever they want- whether its a food, an ingredient, a cuisine etc into the form. After clicking submit, they will see a list of recipes that pertain to what they searched for. The user can click on any recipe to see more information and click on the "Go to website" link to see the full recipe webpage with ingredients and instructions. User has the option to favorite the recipe (put in local storage).

##### My Favorites

- Users can review the recipes they have favorited and choose to unfavorite if they want (remove from local storage).

#### Stretch goals

- Add signup/login so the user can save the recipes they like best on their own list
- Add a button that shows the user made the recipe
- Add a rating system for the user to be able to review the recipe both with number of stars and a written review that is posted under the recipe

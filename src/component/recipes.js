import React from "react";

export default function Recipes(props) {
  return (
    <div>
      {props.recipes.map(recipes => {
        return (
          <div key={recipes.recipe_id}>
            <img src={recipes.image_url} alt={recipes.title} />
            <h5> {recipes.title}</h5>
            <p>
              Publisher: <span> {recipes.publisher}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

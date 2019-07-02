import React from "react";

export default function Recipes(props) {
  return (
    <div>
      {props.recipes.map(recipes => {
        return (
          <div key={recipes.recipe_id}>
            <img src={recipes.image_url} alt={recipes.title} />
            <h5>
              {" "}
              {recipes.title.length < 20
                ? `${recipes.title}`
                : `${recipes.title.substring(0, 25)}...`}
            </h5>
            <p>
              Publisher: <span> {recipes.publisher}</span>
            </p>
            <button>View Recipe</button>
          </div>
        );
      })}
    </div>
  );
}

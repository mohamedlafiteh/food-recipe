import React from "react";

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" />
        <button>Search</button>
      </form>
    </div>
  );
}

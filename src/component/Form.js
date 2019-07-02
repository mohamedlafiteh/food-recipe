import React from "react";

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
        <input type="text" name="recipeName" />
        <button>Search</button>
      </form>
    </div>
  );
}

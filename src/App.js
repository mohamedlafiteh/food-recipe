import React from "react";
import Form from "./component/Form";
import Recipes from "./component/recipes";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
const apiKey = "fb625dfd533dc046510660a5dc17e68e";
class App extends React.Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const app_call = await fetch(
      `https://www.food2fork.com/api/search?key=${apiKey}&q=${recipeName}&count=10`
    );

    const data = await app_call.json();
    this.setState({
      recipes: data.recipes
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Food Recipe</h1>
          <Form getRecipe={this.getRecipe} />
          <Recipes recipes={this.state.recipes} />
        </header>
      </div>
    );
  }
}

export default App;

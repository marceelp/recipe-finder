import { useState } from "react";
import axios from "axios";
import burger from "./assets/burger.png";

import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import IngredientsPopup from "./components/Ingredients";

export default function App() {
  const [timeoutID, setTimeoutID] = useState();
  const [recipeList, setRecipeList] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [open, setOpen] = useState(false);

  function fetchRecipe(searchString) {
    const app_id = "64bceb32";
    const app_key = "a849f6e5c47b6b562d58547ed40a8214";
    const url = `https://api.edamam.com/search?q=${searchString}&app_id=${app_id}&app_key=${app_key}`;

    axios.get(url).then((res) => {
      setRecipeList(res.data.hits);
      console.log(res.data.hits);
    });
  }

  function handleInput(event) {
    // Debounce, so API is called once only
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      fetchRecipe(event.target.value);
    }, 1000);
    setTimeoutID(timeout);
  }

  // Show Ingredients
  function handleRecipeClick(ingredients) {
    setSelectedIngredients(ingredients);
    setOpen(true);
  }

  // Hide Ingredients
  function toggleIngredientsPopup() {
    setSelectedIngredients([]);
    setOpen(false);
  }

  const recipeMap = recipeList.map((obj, i) => (
    <Recipe
      key={i}
      obj={obj.recipe}
      handleClick={() => handleRecipeClick(obj.recipe.ingredientLines)}
    />
  ));

  return (
    <div>
      <div
        className={`${
          open ? "block" : "hidden"
        } w-full h-full absolute z-10 bg-black bg-opacity-50`}
      ></div>
      <Navbar handleChange={handleInput} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-w-max">
        {recipeList.length ? (
          recipeMap
        ) : (
          <img
            src={burger}
            alt="Burger Image"
            className="mx-auto my-40 col-span-4 w-28 h-28 opacity-50"
          />
        )}
      </div>
      {selectedIngredients.length > 0 && (
        <IngredientsPopup
          ingredients={selectedIngredients}
          onClose={toggleIngredientsPopup}
        />
      )}
    </div>
  );
}

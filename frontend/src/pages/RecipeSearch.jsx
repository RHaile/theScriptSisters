import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

function RecipeSearch() {
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null); // Store recipe card URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const spoonApiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const handleAddIngredient = () => {
    if (ingredient && !ingredientsList.includes(ingredient)) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient("");
    }
  };

  const handleRemoveIngredient = (indexToRemove) => {
    setIngredientsList(
      ingredientsList.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleGetRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonApiKey}`,
        {
          params: {
            ingredients: ingredientsList.join(","),
            number: 10,
            ranking: 1,
            ignorePantry: false,
          },
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleGetRecipeDetails = async (id) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/card?apiKey=${spoonApiKey}`
      );
      setRecipeDetails(response.data.url); // Get the image URL for the recipe card
      setIsModalOpen(true); // Open the modal once data is fetched
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const handleRemoveAll = () => {
    setIngredientsList([]);
    setRecipes([]);
    setRecipeDetails(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setRecipeDetails(null); // Clear recipe details
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">
        Fresh From Your Garden To Your Plate
      </h1>
      <center>
        <p>
          Enter the fruits, vegetables and herbs you've <br />
          harvested, and we'll suggest delicious <br />
          recipes based on your ingredients.
        </p>
      </center>

      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter a fruit or vegetable"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={handleAddIngredient}
          className="mt-2 w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900"
        >
          Add Ingredient
        </button>
      </div>

      {ingredientsList.length > 0 && (
        <>
          <div className="mb-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-5">
              {ingredientsList.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item}</span>
                  <button
                    onClick={() => handleRemoveIngredient(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4 w-full max-w-md">
            <button
              onClick={handleGetRecipes}
              className="w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900"
            >
              Get Recipes
            </button>
          </div>
        </>
      )}

      {recipes.length > 0 && (
        <div>
          <h2 className="text-xl text-center font-bold mb-2">Recipes:</h2>
          <div className="flex space-x-2 overflow-auto">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClickDetails={handleGetRecipeDetails}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal to display recipe card */}
      <RecipeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        recipeDetails={recipeDetails}
      />

      {(ingredientsList.length > 0 || recipes.length > 0) && (
        <div className="mt-6 w-full max-w-md">
          <button
            onClick={handleRemoveAll}
            className="w-full rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeSearch;

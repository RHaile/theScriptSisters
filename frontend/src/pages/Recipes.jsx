import React, { useState } from 'react';

function Recipes() {
  const [ingredient, setIngredient] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleAddIngredient = () => {
    if (ingredient && !ingredientsList.includes(ingredient)) {
      setIngredientsList([...ingredientsList, ingredient]);
      setIngredient('');
    }
  };

  const handleRemoveIngredient = (indexToRemove) => {
    setIngredientsList(ingredientsList.filter((_, index) => index !== indexToRemove));
  };

  const handleGetRecipes = () => {
    // Placeholder for recipe generation logic
    // In a real application, this would likely involve an API call
    const generatedRecipes = [
      `Delicious ${ingredientsList.join(' and ')} Salad`,
      `${ingredientsList.join(', ')} Stir Fry`,
      `${ingredientsList[0]} Smoothie`,
    ];

    setRecipes(generatedRecipes);
  };

  const handleRemoveAll = () => {
    setIngredientsList([]);
    setRecipes([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">
        Fresh From Your Garden To Your Plate
      </h1>

    <center><p>
        Enter the fruits, vegetables and herbs you've <br /> harvested, and we'll suggest delicious <br /> recipes based on your ingredients.
    </p></center>

      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter a fruit or vegetable"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={handleAddIngredient}
          className="mt-2 w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              className="w-full rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Recipes
            </button>
          </div>
        </>
      )}

      {recipes.length > 0 && (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">Recipes:</h2>
          <ul className="list-disc pl-5">
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))}
          </ul>
        </div>
      )}

      {(ingredientsList.length > 0 || recipes.length > 0) && (
        <div className="mt-6 w-full max-w-md">
          <button
            onClick={handleRemoveAll}
            className="w-full rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default Recipes;

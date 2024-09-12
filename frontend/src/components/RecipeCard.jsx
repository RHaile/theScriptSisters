import React from "react";

function RecipeCard({ recipe, onClickDetails }) {
  return (
    <div className="card bg-white p-4 shadow-md rounded-md">
      <h3 className="text-lg font-bold">{recipe.title}</h3>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover mt-2"
      />
      <button
        onClick={() => onClickDetails(recipe.id)}
        className="mt-2 w-full rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700"
      >
        Click for Details
      </button>
    </div>
  );
}

export default RecipeCard;

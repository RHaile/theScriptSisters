import React from "react";

function RecipeModal({ isOpen, onClose, recipeDetails }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden"
        style={{
          width: "auto",
          height: "90%",
          maxWidth: "45%",
        }}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal content */}
        <div className="overflow-y-auto max-h-full h-full">
          {recipeDetails ? (
            <img
              src={recipeDetails}
              alt="Recipe Card"
              className="w-full object-contain"
              style={{
                minHeight: "100%", // Ensure the image fills the height of the modal
              }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;

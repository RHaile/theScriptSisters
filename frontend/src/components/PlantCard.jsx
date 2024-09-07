import React from "react";

function PlantCard({ plant, onDetailsClick }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={
          plant.default_image?.regular_url || "https://via.placeholder.com/150"
        }
        alt={plant.common_name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
      <h2 className="font-bold text-xl mb-2">{plant.common_name}</h2>
      <p className="text-gray-700 italic">{plant.scientific_name}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => onDetailsClick(plant)}
      >
        Click for Details
      </button>
    </div>
  );
}

export default PlantCard;

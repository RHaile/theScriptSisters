import React from "react";

function PlantModal({ plant, onClose }) {
  return (
    <div className="fixed inset-0 overflow-auto overflow-contain bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="relative top-8 bottom-8 scale-75 bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="font-bold text-2xl mb-4">{plant.common_name}</h2>
        <img
          src={
            plant.default_image?.regular_url ||
            "https://via.placeholder.com/150"
          }
          alt={plant.common_name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p>
          <strong>Scientific Name:</strong> {plant.scientific_name}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {plant.description || "No description available."}
        </p>
        <p>
          <strong>Type:</strong> {plant.type || "N/A"}
        </p>
        <p>
          <strong>Dimension:</strong> {plant.dimension || "N/A"}
        </p>
        <p>
          <strong>Cycle:</strong> {plant.cycle || "N/A"}
        </p>
        <p>
          <strong>Hardiness:</strong>
          {plant.hardiness
            ? `Min: ${plant.hardiness.min}, Max: ${plant.hardiness.max}`
            : "N/A"}
        </p>
        <p>
          <strong>Watering:</strong> {plant.watering || "N/A"}
        </p>
        <p>
          <strong>Sunlight:</strong> {plant.sunlight || "N/A"}
        </p>
        <p>
          <strong>Maintenance:</strong> {plant.maintenance || "N/A"}
        </p>
        <p>
          <strong>Soil:</strong> {plant.soil || "N/A"}
        </p>
        <p>
          <strong>Growth Rate:</strong> {plant.growth_rate || "N/A"}
        </p>
        <p>
          <strong>Invasive:</strong> {plant.invasive ? "Yes" : "No"}
        </p>
        <p>
          <strong>Care Level:</strong> {plant.care_level || "N/A"}
        </p>
        <p>
          <strong>Flowers:</strong> {plant.flowers ? "Yes" : "No"}
        </p>
        <p>
          <strong>Flowering Season:</strong> {plant.flowering_season || "N/A"}
        </p>
        <p>
          <strong>Edible Fruit:</strong> {plant.edible_fruit ? "Yes" : "No"}
        </p>
        <p>
          <strong>Edible Leaf:</strong> {plant.edible_leaf ? "Yes" : "No"}
        </p>
        <p>
          <strong>Cuisine:</strong> {plant.cuisine || "N/A"}
        </p>
        <p>
          <strong>Medicinal:</strong> {plant.medicinal ? "Yes" : "No"}
        </p>
        <p>
          <strong>Poisonous to Humans:</strong>{" "}
          {plant.poisonous_to_humans ? "Yes" : "No"}
        </p>
        <p>
          <strong>Poisonous to Pets:</strong>{" "}
          {plant.poisonous_to_pets ? "Yes" : "No"}
        </p>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PlantModal;

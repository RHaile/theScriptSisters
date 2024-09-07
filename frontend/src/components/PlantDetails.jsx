import React, { useState } from "react";
import PlantCard from "./PlantCard"; // Import the PlantCard component
import PlantModal from "./PlantModal"; // Import the PlantModal component

function PlantDetails({ plants }) {
  const [selectedPlant, setSelectedPlant] = useState(null); // Track which plant is selected

  const handleDetailsClick = (plant) => {
    setSelectedPlant(plant); // Set the selected plant to show details in the modal
  };

  const closeModal = () => {
    setSelectedPlant(null); // Close the modal
  };

  if (plants.length === 0) {
    return <p>No results found. Try searching for a different plant.</p>;
  }

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-4xl">
      {plants.map((plant, index) => (
        <PlantCard
          key={index}
          plant={plant}
          onDetailsClick={handleDetailsClick} // Pass the handler to the PlantCard component
        />
      ))}

      {/* Show modal when a plant is selected */}
      {selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          onClose={closeModal} // Pass the close handler to the modal
        />
      )}
    </div>
  );
}

export default PlantDetails;

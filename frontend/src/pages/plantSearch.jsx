import React, { useState } from "react";
import axios from "axios";
import PlantDetails from "../components/PlantDetails"; // Import the PlantDetails component

function PlantSearch() {
  const [searchTerm, setSearchTerm] = useState(""); // To track the text input
  const [plantData, setPlantData] = useState([]); // To store the final result
  const [loading, setLoading] = useState(false); // To track loading state
  const [error, setError] = useState(null); // To track any errors

  const perenualApiKey = import.meta.env.VITE_PERENUAL_API_KEY;

  // Event handler for the search button
  const handleSearch = async () => {
    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    try {
      // First API call using the searchTerm
      const firstResponse = await axios.get(
        `https://perenual.com/api/species-list?key=${perenualApiKey}&q=${searchTerm}`
      );

      // Access the 'data' key where the plant data is stored
      const plantArray = firstResponse.data.data;

      if (Array.isArray(plantArray)) {
        // Filter data to include only where common_name includes the searchTerm
        const filteredPlants = plantArray.filter((plant) =>
          plant.common_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Extract the "id" of the filtered results
        const plantIds = filteredPlants.map((plant) => plant.id);

        // Use Promise.all to make all second API calls in parallel
        const plantDetails = await Promise.all(
          plantIds.map(async (id) => {
            const plantDetailResponse = await axios.get(
              `https://perenual.com/api/species/details/${id}?key=${perenualApiKey}`
            );
            return plantDetailResponse.data;
          })
        );

        // Save the final data in state
        setPlantData(plantDetails);
      } else {
        throw new Error("Unexpected response format from API");
      }
    } catch (error) {
      setError("Failed to fetch plant data.");
      console.error("Error fetching plant data:", error);
    } finally {
      setLoading(false); // Stop loading after the operation
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-4">Get to know your plant</h1>
      <p className="text-lg mb-8">
        Simply enter your plant’s name below and unlock expert advice tailored
        to your plant's specific needs.
      </p>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state when input changes
        />
        <button className="btn btn-active btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="mt-8">
          <p>Loading...</p>{" "}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-8 text-red-500">
          <p>{error}</p>
        </div>
      )}
      <div className="flex space-x-2 overflow-auto">
        {/* Display the result using PlantDetails component */}
        {!loading && !error && <PlantDetails plants={plantData} />}
      </div>
    </div>
  );
}

export default PlantSearch;

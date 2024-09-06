import { useState } from 'react';

function CommunityGarden() {
  const [searchInput, setSearchInput] = useState("");
  const [gardens, setGardens] = useState([]); // This will hold the search results

  const handleSearch = () => {
    // For now, we can simulate search results
    const sampleGardens = [
      { name: "Green Thumb Garden", city: "Los Angeles", zip: "90001" },
      { name: "Urban Oasis", city: "New York", zip: "10001" },
    ];

    const filteredGardens = sampleGardens.filter(garden =>
      garden.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      garden.zip.includes(searchInput)
    );
    
    setGardens(filteredGardens);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h1 className="text-4xl font-bold mb-4">Find a Community Garden Near You</h1>
      <input
        type="text"
        placeholder="Enter city or zip code"
        className="input input-bordered w-full max-w-xs mb-4"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="btn btn-primary mb-8" onClick={handleSearch}>Search</button>

      <div>
        {gardens.length > 0 ? (
          <ul>
            {gardens.map((garden, index) => (
              <li key={index}>
                {garden.name} - {garden.city} ({garden.zip})
              </li>
            ))}
          </ul>
        ) : (
          <p>No gardens found</p>
        )}
      </div>
    </div>
  );
}

export default CommunityGarden;

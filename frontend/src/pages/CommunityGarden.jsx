import { useState } from 'react';

function CommunityGarden() {
  const [searchInput, setSearchInput] = useState("");
  const [gardens, setGardens] = useState([]); 

  const handleSearch = () => {
    
    const sampleGardens = [
      { name: "Greenway Community Garden", address: "1652 Greenway Ave -", city: "Columbus", zip: "43203" },
      { name: "Avondale Community Garden", address: "290-294 Avondale Ave -", city: "Columbus", zip: "43223" },
      { name: "Milo-Grogan Green Space and Community Garden", address: "900 Cleveland Ave -", city: "Columbus", zip: "43201" },
      { name: "Franklin Park Conservatory and Botanical Gardens", address: "1777 E Broad St -", city: "Columbus", zip: "43203" },
      { name: "The Miracle Garden, Community Garden", address: "2650 Westerville Rd -", city: "Columbus", zip: "43211" },
      { name: "South Central Commons Community Garden", address: "495 Hanford St -", city: "Columbus", zip: "43206" },
      { name: "Stoddart Avenue Community Garden", address: "445 Stoddart Ave -", city: "Columbus", zip: "43205" },
      { name: "Columbus Ohio Seed Exchange", address: "2925 Calumet St -", city: "Columbus", zip: "43202" },
      { name: "Healthy Homes Community Garden", address: "941 Carpenter St -", city: "Columbus", zip: "43206" },
      { name: "Parsons Community Garden", address: "1309 Parsons Ave -", city: "Columbus", zip: "43206" },
      { name: "Mary Yost Garden", address: "2888 Lakewood Dr -", city: "Columbus", zip: "43231" },
      { name: "Lewis and Walker Community Garden", address: "640 Gilbert St -", city: "Columbus", zip: "43205" },
      { name: "The Belvidere Healthy Living Garden", address: "131 Belvidere Ave -", city: "Columbus", zip: "43223" },
      { name: "Sullivant Gardens Community Center", address: "755 Renick St -", city: "Columbus", zip: "43223" },
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
        style={{ fontSize: '1.17rem' }}
      />
      <button className="btn btn-secondary mb-8" onClick={handleSearch}>Search</button>

      <div>
        {gardens.length > 0 ? (
          <ul>
            {gardens.map((garden, index) => (
              <li key={index}>
                <strong>{garden.name}</strong> - {garden.address} {garden.city} ({garden.zip})
              </li>
            ))}
          </ul>
        ) : (
          <p>No gardens found</p>
        )}
      </div>

      <div className="mt-12">
        <p className="text-sm mb-2 text-center">Would You Like To Start Your Own Garden?</p>
        <a
          href="https://cuyahoga.osu.edu/sites/cuyahoga/files/imce/Misc_Files/ANR/Start%20Up%20Guide%20-%20Dig%20In.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-200 text-center">
          Click Here For The Start-Up Guide
        </a>
      </div>
    </div>
  );
}

export default CommunityGarden;

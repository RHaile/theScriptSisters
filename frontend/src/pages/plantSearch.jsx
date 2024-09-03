function PlantSearch() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-base-200">
        <h1 className="text-4xl font-bold mb-4">Get to know your plant</h1>
        <p className="text-lg mb-8">Simply enter your plants name below and unlock expert advice tailored to your plants specific needs.</p>
        
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-active btn-primary">Search</button>
        </div>
      </div>
    );
  }
  
  export default PlantSearch;
  



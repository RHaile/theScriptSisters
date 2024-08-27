import React from "react";
import '../../css/home.css';

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Seed Circle</h1>
        <p className="py-6">
        From Seed to Plate
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    console.log(response.data.fruits);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return <div>Hello World</div>;
}

export default App;

import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import Login from "./pages/login";
import MyPlants from "./pages/MyPlants";
import PlantSearch from "./pages/PlantSearch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/MyPlants",
    element: <MyPlants />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/PlantSearch",
    element: <PlantSearch />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
])
;




createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);


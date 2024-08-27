import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import Login from "./pages/login";
import MyPlants from "./pages/myPlants";
import PlantSearch from "./pages/plantSearch";
import SignUp from "./pages/signUp";
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
    path: "/myplants",
    element: <MyPlants />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/plantsearch",
    element: <PlantSearch />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <div>Oops ! There was an error.</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
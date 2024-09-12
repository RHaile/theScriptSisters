import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPlants from "./pages/MyPlants";
import PlantSearch from "./pages/PlantSearch";
import RecipeSearch from "./pages/RecipeSearch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommunityGarden from "./pages/CommunityGarden";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/myplants",
    element: <MyPlants />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/plantsearch",
    element: <PlantSearch />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/recipesearch",
    element: <RecipeSearch />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/communitygarden",
    element: <CommunityGarden />,
    errorElement: <div>Oops! There was an error.</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);

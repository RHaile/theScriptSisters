import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import MyPlants from "./pages/MyPlants";
import PlantSearch from "./pages/plantSearch";
import Recipes from "./pages/Recipes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommunityGarden from "./pages/CommunityGarden";
import { AuthProvider } from "./context/AuthContext";
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
    path: "/recipes",
    element: <Recipes />,
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
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />

    </AuthProvider>

  </StrictMode>
);

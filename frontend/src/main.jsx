import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPlants from "./pages/MyPlants";
import PlantSearch from "./pages/plantSearch";
import Recipes from "./pages/RecipeSearch";
import CommunityGarden from "./pages/CommunityGarden";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, errorElement: <div>Oops! There was an error.</div> },
      { path: "/login", element: <Login />, errorElement: <div>Oops! There was an error.</div> },
      { path: "/signup", element: <Signup />, errorElement: <div>Oops! There was an error.</div> },
      { path: "/myplants", element: <PrivateRoute><MyPlants /></PrivateRoute>, errorElement: <div>Oops! There was an error.</div> },
      { path: "/plantsearch", element: <PrivateRoute><PlantSearch /></PrivateRoute>, errorElement: <div>Oops! There was an error.</div> },
      { path: "/recipes", element: <PrivateRoute><Recipes /></PrivateRoute>, errorElement: <div>Oops! There was an error.</div> },
      { path: "/communitygarden", element: <PrivateRoute><CommunityGarden /></PrivateRoute>, errorElement: <div>Oops! There was an error.</div> },
    ]
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
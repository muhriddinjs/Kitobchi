import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import Navbar from "./components/Navbar";

// layouts
import RootLayout from "./layout/RootLayout";

// pages
import Home from "./pages/Home";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";
import Error from "./pages/Error";
import Announcement from "./pages/Announcement";
import Profile from "./pages/Profile";
import { Book } from "lucide-react";
import CategoryPage from "./components/CategoryPage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/books/:id", // 🔥 SINGLE PAGE ROUTE
          element: <BookDetails />,
        },

        {
          path: "/announcement",
          element: <Announcement />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/category/:categoryPath", // dynamic category page
          element: <CategoryPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;

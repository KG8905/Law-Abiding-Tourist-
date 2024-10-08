import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "symbol-observable";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Selection from "./pages/Selection.jsx";
import App from "./App.jsx";
import NewLaw from "./pages/NewLaw.jsx";
import About from "./pages/About.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/selection",
        element: <Selection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/newlaw",
        element: <NewLaw />,
      },
      {
        path: "/about",
        element: <About/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

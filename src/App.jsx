import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Homepage } from "./components/Homepage";
import { Welcome } from "./components/Welcome";
import { Side_Bar } from "./components/Side_Bar";
import { Payment}  from "./components/Payment";
import { SearchPage } from "./components/SearchPage";
import { Categories } from "./components/Categories";
import { Outlet__Page } from "./components/Outlet__Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/login",
      element: <Login />, //Login
    },
    {
      path: "/register",
      element: <Register />, //Register
    },
    {
      path: "/home",
      element: <Homepage />,
      children: [
        {
          index: true,
          element: <Outlet__Page />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "payments",
          element: <Payment/>,
        },

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

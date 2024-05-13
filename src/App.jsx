import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import {Homepage} from './components/Homepage'
import { Welcome } from "./components/Welcome";
import { Side_Bar } from "./components/Side_Bar";
import { HomepageMain } from "./components/HomepageMain";
import { SearchPage } from "./components/SearchPage";
import { Categories } from "./components/Categories";
import { Outlet__Page } from "./components/Outlet__Page";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>
    },
    {
      path: "/login",
      element: <Login/>,//Login
    },
    {
      path: "/register",
      element: <Register/>,//Register
    },
    {
      path: "/home",
      element: <Homepage/>,
    },
      {
          path: "/home/main",
          element: <HomepageMain/>,
          children:[
            {
              path: "/home/main/",
              element: <Outlet__Page/>,
            },
            {
              path: "/home/main/search",
              element: <SearchPage/>,
            },
          {
            path: "/home/main/categories",
            element: <Categories/>,
          },
        {
          path: "/home/main/outlet",
          element: <Outlet__Page/>,
        }
          ]
        }
      
      ]);
  
  return (
    <>
        <RouterProvider router={router} />
        
    </>
  );
}


export default App

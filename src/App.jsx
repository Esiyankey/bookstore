import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import { Homepage } from './components/Homepage'
import Login from './components/Login';
import Register from "./components/Register";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<WelcomePage/>,
    },
    {
      path: "/login",
      element:<Login/> ,
    },
    {
      path: "/register",
      element:<Register/> ,
    },
    {
      path: "/home",
      element:<Homepage/> ,
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App

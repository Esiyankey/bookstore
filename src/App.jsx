import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import {Homepage} from './components/Homepage'
import { Welcome } from "./components/Welcome";



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
      element: <Homepage/>,//Homepage
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
        
    </>
  );
}


export default App

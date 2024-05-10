import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login'
import WelcomePage from "./components/WelcomePage"
import Register from './components/Register'
import {Homepage} from './components/Homepage'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage/>,//WelcomePage
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

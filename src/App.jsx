// import { Homepage } from './components/Homepage'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Register from "./components/Register";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Login/> ,
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App

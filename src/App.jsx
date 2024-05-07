import { useState } from 'react'
import { Homepage } from './components/Homepage'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App

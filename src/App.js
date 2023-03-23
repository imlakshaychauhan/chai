import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />
    }, 
    {
      path: "/",
      element: <h1>App.js</h1>,
    }
  ]);
  return (
    <>
      <h1>Header</h1>
      <RouterProvider router={router} />
      <h1>Footer</h1>
    </>
  );
}

export default App;

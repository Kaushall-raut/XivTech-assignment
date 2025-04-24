import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Home } from "./pages/Home";
import About from "./pages/about";
import Track from "./pages/Track";

export const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "track",
      element: <Track/>,
    },
  ]);
  return (
    <div className="container">
      <Sidebar/>
      <main>
<RouterProvider router={route}/>
     {/* <Home/> */}
      </main>
    </div>
  );
};

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Home } from "./pages/Home";

import Track from "./pages/Track";
import { DataProvider } from "./context/DataProvider";
import { About } from "./pages/About";

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
      element: <Track />,
    },
  ]);
  return (
    <div className="container">
      <Sidebar />
      <DataProvider>
        <main>
          <RouterProvider router={route} />
        </main>
      </DataProvider>
    </div>
  );
};

import Sidebar from "./components/Sidebar";
import "./index.css";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <main>

     <Home/>
      </main>
    </div>
  );
};

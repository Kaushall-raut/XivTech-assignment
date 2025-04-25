import { useContext } from "react";
import { Data } from "../context/DataProvider";

export const Home = () => {
  const name = useContext(Data);

console.log(name);

  return <div className="home"><h2>Welcome to the website ,visit track section to track crypto coins value</h2> </div>;
};

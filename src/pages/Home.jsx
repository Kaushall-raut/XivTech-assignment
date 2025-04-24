import { useContext } from "react";
import { Data } from "../context/DataProvider";

export const Home = () => {
  const name = useContext(Data);

console.log(name);

  return <div>Home </div>;
};

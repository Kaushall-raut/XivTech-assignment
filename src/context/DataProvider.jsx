import { createContext, useEffect, useState } from "react";


export const Data = createContext();
// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [liveData, setData] = useState([]);

  const ReqData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
      },
    };

    const req = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      options
    );
    const res = await req.json();
    console.log(res);

    setData(res);
    // return res;
  };

  useEffect(() => {
    ReqData();
  }, []);

  return <Data.Provider value={liveData}>{children}</Data.Provider>;
};

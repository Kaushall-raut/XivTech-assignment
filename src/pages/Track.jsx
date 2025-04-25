import { useContext } from "react";
import { Data } from "../context/DataProvider";

const Track = () => {
  const data = useContext(Data);
  console.log(data);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>name</th>
            <th>Symbol</th>
            <th>Image</th>
            <th>Current Price</th>
            <th>Total Supply</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td> {value.id}</td>
              <td> {value.symbol}</td>
              <td><img src={value.image} alt={value.name} /></td>
              <td>{value.current_price}</td>
              <td>{value.total_supply}</td>
              <td>{value.total_volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Track;

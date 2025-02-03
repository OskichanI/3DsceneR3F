import Data from "../data/3DModels.json";
import GLBLoader from "./GLBLoader";
import MainData from "../data/Data.js";

export default function Resources() {
  const data = Data;
  const room = MainData.getRoom();

  const filteredData = data[room];

  const items = {};
  const toLoad = filteredData.length;
  const loaded = 0;


  //City
  return (
    <>
      {filteredData.map((data, key) => {
        return <GLBLoader data={data} key={key} />;
      })}
    </>
  );
}

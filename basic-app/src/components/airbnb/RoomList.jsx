import RoomAvatar from "./RoomAvatar.jsx";
import { useState, useEffect } from "react";
import { fetchData } from "../../util/fetch.js";

export default function RoomList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData("http://localhost:5173/data/airbnb.json");
      setList(data.roomList);
    };
    loadData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {list.map((item) => (
        <RoomAvatar key={item.pk} item={item} />
      ))}
    </div>
  );
}

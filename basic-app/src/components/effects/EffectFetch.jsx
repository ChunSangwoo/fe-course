import AvatarList from "../avatar/AvatarList.jsx";
import people1 from "../../assets/people1.webp";
import people2 from "../../assets/people2.webp";
import people3 from "../../assets/people3.webp";
import { useEffect, useState } from "react";
[] = euset=cont zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

export default async function EffectFetch() {
  // const alist = [
  // {img: "/people1.webp", name: "James" },
  // {img: "/people2.webp", name: "김철수"},
  // {img: "/people3.webp", name: "최영희"},
  // ]
  const url = "http://localhost:5173/data/alist.json";
  useEffect(() => {
    const data = null;
    const fetchData = async () => {
      //   await fetch(url)
      //     .then((response) => response.json())
      //     .then((jsonData) => jsonData) //fetch 타입이 Promise return
      //     .catch((error) => console.log(error));

      const response = await fetch(url);
      const data = await response.json();
    };
    fetchData();
  });

  console.log("data--->", data);

  return <>{/* <AvatarList list={alist} /> */}</>;
}

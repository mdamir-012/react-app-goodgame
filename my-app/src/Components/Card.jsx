import React, { useEffect, useState } from "react";

const Card = () => {
    const [datas,setDatas] =useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch("https://api.punkapi.com/v2/beers");
      let data = await response.json();
      console.log(data);
      setDatas(data)
    } catch (err) {
      console.log(err);
    }
  };

  console.log(datas)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>my cards data</h1>
    </div>
  );
};

export default Card;

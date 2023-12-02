import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [datas, setDatas] = useState([]);
  

  const fetchData = async () => {
    try {
      let response = await fetch("https://api.punkapi.com/v2/beers");
      let data = await response.json();
      console.log(data);
      setDatas(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(datas);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Card datas={datas} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

// Main App Component
function App() {
  // State for storing fetched data, loading status, and search term
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // Function to construct the API URL with the search query
  const getData = (url, search) => {
    if (search) {
      url = `${url}?beer_name=${search}`;
    }
    return url;
  };

  // Function to fetch data from the API
  const fetchData = async () => {
    let api = getData(`https://api.punkapi.com/v2/beers`, search);
    try {
      setLoading(true);
      let response = await fetch(api);
      let data = await response.json();
      // Log the fetched data to the console
      console.log(data);
      setDatas(data);
      setLoading(false);
    } catch (err) {
      // Log any errors that occur during the fetch operation
      console.log("Error while fetching data:", err);
    }
  };

  console.log(datas);

  // Effect hook to fetch data when the component mounts or when the search term changes
  useEffect(() => {
    fetchData();
  }, [search]);

  // JSX structure for the App component
  return (
    <div className="App">
      <h1>Cards data with images</h1>
      <div>
        <label htmlFor="">Search:</label>
        <br />
        <input
          type="text"
          placeholder="search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <Card datas={datas} loading={loading} />
    </div>
  );
}

export default App;

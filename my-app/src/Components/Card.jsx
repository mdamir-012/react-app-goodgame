// Card Component
const Card = ({ datas, loading }) => {
  // Log loading status and datas to the console
  console.log(loading, datas);

  return (
    <div style={{ margin: "5px", marginTop: "15px" }}>
      {/* Display loading message and image when loading is true */}
      {loading ? (
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKxvWLyAmBbTKJMd_6x115Y9g5xpsX2fVsYhDMU2fBA&s"
            alt="loading"
          />
          <h1>Loading...</h1>
        </div>
      ) : (
        // Display data in a grid when loading is false
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "5px",
          }}
        >
          {" "}
          {/* Map through datas array and display each card */}
          {datas?.map((elem) => (
            <div key={elem.id} style={{ border: "1px solid grey" }}>
              <h2>Id: {elem.id}</h2>
              <h3>Name: {elem.name}</h3>
              <p>ph: {elem.ph}</p>
              <p>Tagline: {elem.tagline}</p>
              <p>contributed_by: {elem.contributed_by}</p>
              <img
                src={elem.image_url}
                alt={elem.name}
                width={200}
                height={300}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;

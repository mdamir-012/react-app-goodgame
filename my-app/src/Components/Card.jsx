import React, {  useState } from "react";

const Card = ({datas}) => {
    

  return (
    <div style={{margin:"5px",marginTop:"15px"}}>
      <h1>Cards data with images</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"5px"}}>
      {datas?.map((elem)=> (
        <div key={elem.id} style={{border:"1px solid grey"}}>
            <h2>Id: {elem.id}</h2>
            <h3>Name: {elem.name}</h3>
            <p>ph: {elem.ph}</p>
            <p>tagline: {elem.tagline}</p>
            <img src={elem.image_url} alt={elem.name} width={200} height={300}/>
        </div>
      ))}

      </div>
      
    </div>
  );
};

export default Card;

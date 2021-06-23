import React, { useState } from "react";

function Item({ name, category }) 
{

  const [inChart, setInChart] = useState(false)
  const handleChart = () =>{
    inChart === false ? setInChart(true) : setInChart(false)
  }

  return (
    <li className={inChart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleChart}>Add to Cart</button>
    </li>
  );
}

export default Item;

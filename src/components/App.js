import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  

  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);
  
  const [theme, setTheme] = useState(false)
  const [items, setItems] = useState(itemData);

  const handleTheme = () =>{
     theme === false ? setTheme(true) : setTheme(false)
    }
  return (
    <div className={"App " + (theme ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>{theme ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

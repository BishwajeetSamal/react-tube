import React, { useState } from "react";
import Makebutton from "../Makebutton";

function UseStateWithArray() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      <div style={{ width: "15rem" }}>
        <div style={{ display: "flex" }}>
          <Makebutton name="Add a Number" data={addItem} />
          <div style={{ width: "5rem", marginLeft: "1rem" }}>
            <Makebutton
              name="Reset"
              data={() => {
                setItems([]);
              }}
            />
          </div>
        </div>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </div>
    </div>
  );
}

export default UseStateWithArray;

import React from "react";
import { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log("useEffect Called");
    const logMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      Hooks X - {x} and Y- {y}
    </div>
  );
}

export default HookMouse;

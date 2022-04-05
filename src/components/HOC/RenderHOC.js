import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
export default function RenderHOC() {
  return (
    <div style={{ textAlign: "center", paddingTop: "1rem" }}>
      <ClickCounter name="Bishwajeet" />
      <HoverCounter name="Priyambada" />
    </div>
  );
}

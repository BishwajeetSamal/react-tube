import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import FunctionalCounter from "./FunctionalCounter";
export default function RenderHOC() {
  return (
    <div style={{ textAlign: "center", paddingTop: "1rem" }}>
      <ClickCounter name="Bishwajeet" />
      <HoverCounter name="Priyambada" />
      <FunctionalCounter name="Test" class="6th" />
    </div>
  );
}

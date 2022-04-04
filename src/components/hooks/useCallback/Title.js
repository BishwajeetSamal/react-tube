import React from "react";

function Title() {
  console.log("Rendering Titile");
  return (
    <div>
      <h2>useCallback Hook</h2>
    </div>
  );
}

export default React.memo(Title);

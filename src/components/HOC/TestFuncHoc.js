import React, { useState } from "react";

const TestFuncHoc = (OriginalComponent) => {
  function NewComponent(props) {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount((prevState) => prevState + 1);
    };
    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  }
  return NewComponent;
};
export default TestFuncHoc;

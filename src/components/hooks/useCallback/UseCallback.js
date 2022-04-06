import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
function UseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incerementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div style={{ textAlign: "center" }}>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incerementSalary}>Incerement Salary</Button>
    </div>
  );
}

export default UseCallback;

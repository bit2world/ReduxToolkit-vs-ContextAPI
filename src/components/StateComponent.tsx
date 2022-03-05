import React, { useEffect, useState } from 'react';

function StateComponent() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("Count in State Component: ", count);
  })
  const clickAction = () => {
    setCount(count + 1);
  }
  return (
    <div style={{ margin: "20px", padding: "1px", border: "1px solid gray" }}>
      <h2>Usestate component</h2>
      <button
        style={{ backgroundColor: "gray", width: "50%", height: "60px", color: "white" }}
        onClick={clickAction}
      >
        Increase
      </button>
      <p>
        count : {count}
      </p>
    </div>
  );
}

export default StateComponent;

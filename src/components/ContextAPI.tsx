import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';

function ContextAPI() {
  const { age, setAge } = useContext(AppContext);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("Age in Context component : ", age);
  })
  const clickAction = () => {
    setCount(count + 1)
    setAge(count);
  }
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h2>Context API component</h2>
      <button
        style={{ backgroundColor: "gray", width: "50%", height: "60px", color: "white" }}
        onClick={clickAction}
      >
        Set Age
      </button>
      <p>
        Age : {age}
      </p>
    </div>
  );
}

export default ContextAPI;

import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { increment } from '../reducers/counterSlice'

function ReduxComponent() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log("Age in Redux component : ", count);
  })
  const clickAction = () => {
    dispatch(increment());
  }
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h2>ReduxToolkit component</h2>
      <button
        style={{ backgroundColor: "gray", width: "50%", height: "60px", color: "white" }}
        onClick={clickAction}
      >
        Increase
      </button>
      <p>
        Count : {count}
      </p>
    </div>
  );
}

export default ReduxComponent;

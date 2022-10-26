import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("rendering");
  })
  
  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(increment(5))}}>+</button>
    </>
  );
};

export default Counter;

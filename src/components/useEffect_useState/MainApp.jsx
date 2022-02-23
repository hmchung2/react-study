import React, { useState } from "react";
import "../../App.css";

const UseEffect_UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      UseEffect UseState
      <div>count : {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseEffect_UseState;

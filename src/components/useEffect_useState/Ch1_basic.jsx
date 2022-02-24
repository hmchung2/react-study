import React, { useState, useEffect } from "react";

const Ch1_basic = () => {
  const [count, setCount] = useState(5);

  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [secondCount]);

  return (
    <div>
      UseEffect UseState 1<div>count : {count}</div>
      {count} -- {secondCount}
      <button onClick={() => setSecondCount(secondCount + 1)}>Increment</button>
      <button onClick={() => setSecondCount(secondCount - 1)}>Decrement</button>
    </div>
  );
};

export default Ch1_basic;

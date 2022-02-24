import React, { useState, useEffect } from "react";
import "../../App.css";
import Ch1_basic from "./Ch1_basic";
import Ch2_renderOther from "./Ch2_renderOther";

const UseEffect_UseState = () => {
  const [count, setCount] = useState(5);

  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [secondCount]);

  return (
    <div>
      <div>
        Ch1. Basic
        <Ch1_basic></Ch1_basic>
      </div>
      <br />
      <div>
        Ch2. Render Other
        <Ch2_renderOther></Ch2_renderOther>
      </div>
    </div>
  );
};

export default UseEffect_UseState;

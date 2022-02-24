import React, { useEffect, useState } from "react";
import OtherComponent from "./OtherComponent";

function Ch2_renderOther() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(false)}>Hide Component</button>
      <button onClick={() => setShowComponent(true)}>Show Component</button>

      {showComponent && <OtherComponent />}
    </div>
  );
}

export default Ch2_renderOther;

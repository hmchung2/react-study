import React, { useEffect, useState } from "react";

function OtherComponent() {
  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component will unmount");
    };
  }, []);

  return <div>Other Component</div>;
}

export default OtherComponent;

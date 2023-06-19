import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("You Clicked me!"), [count]); //(function, [dependency])

  return (
    <div>
      <h2> You Clicked {count} times </h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Click me !{" "}
      </button>
    </div>
  );
};

export default Effect;

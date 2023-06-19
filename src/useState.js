import React, { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container-fluid">
      <h1 className="mb-4  p-3 m-3"> Counter App </h1>

      <div className="mb-4 border  p-3 m-3">
        <h2> {count} </h2>
      </div>

      <div>
        <button
          className="btn btn-dark me-4 p-3 m-3"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="btn btn-dark me-4 p-3 m-3"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          {" "}
          -{" "}
        </button>
        <button
          className="btn btn-dark  p-3 m-3"
          onClick={() => {
            setCount(0);
          }}
        >
          {" "}
          0{" "}
        </button>
      </div>
    </div>
  );
};

export default Increment;

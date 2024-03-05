import React from "react";
import Button from "../common/button";

const ComponentsThree = ({ count, setCount }) => {
  return (
    <div>
      <div className="card">
        <Button count={count} setCount={setCount} color={"white"}>
          count is
        </Button>
        <button onClick={() => setCount((count) => count - 1)}>
          {" "}
          Countdown{" "}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default ComponentsThree;

import React from "react";
import { useState } from "react";

const Local = () => {
  const [count, setCount] = useState(0);
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div>
      <p> ====== Ini contoh local props ======</p>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}> add 1</button>
        <button onClick={() => setCount(count - 1)}> Minus 1</button>
      </div>
      {/* ternery operator */}
      <div style={{ color: isGreen ? "green" : "red" }}>
        is {isGreen ? "warna nya hijau" : "warnanaya bukan hijau"}{" "}
        {/* ubah data pada starte green */}
        <button onClick={() => setIsGreen(!isGreen)}> ubah warna </button>
      </div>

      <p> ============= </p>
    </div>
  );
};

export default Local;

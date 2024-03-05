import React from "react";
import ComponentsTwo from "../components/home/componentsTwo";
import { useState } from "react";
import Local from "../components/home/local";
import { useSelector } from "react-redux";
import Active from "../components/common/buttonActive/Active";

const Home = () => {
  const [count, setCount] = useState(0);
  // dapatkan state dari store menggunakan useSelector
  // .counter.value berasal dari state kita bernama counter dan ambil valuenya
  // nama counterRedux bebas
  const counterRedux = useSelector((state) => state.counter.value);

  const activeRedux = useSelector((state) => state.color.value);

  return (
    <>
      <ComponentsTwo count={count} setCount={setCount} />
      <Local />
      <div>
        <p> ======= contoh redux ======</p>
        <h1>ini contoh action dan reducer </h1>
        {/* panggil counterRedux */}
        <h6 style={{ color: "red", fontSize: "24px" }}> {counterRedux} </h6>
      </div>

      <hr />
      <hr />

      <h2 style={{ color: activeRedux ? "green" : "red" }}> Tes active</h2>

      <Active />
      <p> ============== </p>
    </>
  );
};

export default Home;

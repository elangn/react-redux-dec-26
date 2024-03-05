import React from "react";
import Button from "../common/button";
import { useSelector } from "react-redux";

const MainComponents = () => {
  // use selector untuk menampilkan data state
  const counterRedux = useSelector((state) => state.counter.value);
  const colorRedux = useSelector((state) => state.color.value);
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quam nemo
      earum quia doloribus excepturi ad. Commodi quia culpa ex dignissimos
      accusantium eos alias, sed voluptate voluptatem accusamus eum deleniti.
      <Button>Haloo</Button>
      {/* tampilkan state  */}
      <h1>{counterRedux}</h1>
      <h1 style={{ color: colorRedux ? "green" : "red" }}> Ubah Warna</h1>
    </div>
  );
};

export default MainComponents;

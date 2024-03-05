import React from "react";
import MainComponents from "../components/about/main";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../reducer/counterSlice.js";
import { ubah } from "../reducer/colorSlice.js";

const About = () => {
  // inisiasi dispatch kita
  // gunakan "useDispatch" yaitu hook dari react redux
  const dispath = useDispatch();
  return (
    <>
      <MainComponents />
      {/* action untuk ubah warna  */}
      <button onClick={() => dispath(ubah())}> Ubah warna </button>
      {/* buat action untuk dispatch ke reducer increment dan decrement */}
      <button onClick={() => dispath(increment())}>Increment</button>
      <button onClick={() => dispath(decrement())}>Decrement</button>

      {/* menit57.41 */}
    </>
  );
};

export default About;

import React from "react";
import { useDispatch } from "react-redux";
import { ubah } from "../../../reducer/colorSlice";

const Active = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(ubah())}> Button Active</button>
    </div>
  );
};

export default Active;

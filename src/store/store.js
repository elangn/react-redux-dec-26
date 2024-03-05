import { configureStore } from "@reduxjs/toolkit";
// import counterReducer
import counterReducer from "../reducer/counterSlice.js";
import colorReducer from "../reducer/colorSlice.js";

// configureStore fungsi bawaan redux
export const store = configureStore({
  reducer: {
    // ini adalah nama state dengan nama "counter" , dan reducer dengan nama "counterReducer" yaitu gabungan dari counter dan reducers yang telah di buat di komponen counterSlice.js
    counter: counterReducer,
    // state kedua untuk change color
    color: colorReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
// slice merpukana nama fungsi untuk reducer bawan toolkit

export const counterSlice = createSlice({
  // nama state nya
  name: "counter",
  // nilai dari state
  initialState: {
    value: 100,
  },
  // nama action untuk nnti di gunakan di store
  reducers: {
    // reducers 1
    increment: (state) => {
      // actionnya ngapain ?
      state.value += 1;
    },
    // reducers 2
    decrement: (state) => {
      // actionnya ngapain ?
      state.value -= 1;
    },
  },
});

// export actionnya ke reducers
export const { increment, decrement } = counterSlice.actions;

// export reducers agar bisa di gpakai di function lain
export default counterSlice.reducer;

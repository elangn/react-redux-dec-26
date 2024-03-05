import { createSlice } from "@reduxjs/toolkit";
// slice merpukana nama fungsi untuk reducer bawan toolkit

export const colorSlice = createSlice({
  // nama state nya
  name: "color",
  // nilai dari state
  initialState: {
    value: false,
  },
  // nama action untuk nnti di gunakan di store
  reducers: {
    ubah: (state) => {
      state.value = !state.value;
    },
  },
});

// export actionnya ke reducers
export const { ubah } = colorSlice.actions;

// export reducers agar bisa di gpakai di function lain
export default colorSlice.reducer;

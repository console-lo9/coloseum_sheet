import { createSlice } from "@reduxjs/toolkit";

const currentRowSlice = createSlice({
  name: "currentRow",
  initialState: { row: -1 },
  reducers: {
    setCurrentRow(state, action) {
      state.row = action.payload;
    },
  },
});

export const { setCurrentRow } = currentRowSlice.actions;

export default currentRowSlice.reducer;

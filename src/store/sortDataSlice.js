import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "assets/MOCK_DATA.json";

const sortDataSlice = createSlice({
  name: "sort",
  initialState: [...MOCK_DATA],
  reducers: {
    descending(state, action) {
      state.sort((a, b) => (a[action.payload] > b[action.payload] ? -1 : 1));
    },
    ascending(state, action) {
      state.sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1));
    },
  },
});

export const sortDataActions = sortDataSlice.actions;
export default sortDataSlice.reducer;

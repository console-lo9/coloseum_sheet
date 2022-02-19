import { createSlice } from "@reduxjs/toolkit";
const tableInitialState = {
  tableData: [],
};

export const tableSlice = createSlice({
  name: "table",
  initialState: tableInitialState,
  reducers: {
    getTableData(state, action) {
      state.tableData = action.payload;
    },
  },
});

export const tableActions = tableSlice.actions;

export default tableSlice.reducer;

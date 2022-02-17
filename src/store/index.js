import { configureStore, createSlice } from "@reduxjs/toolkit";

const tableInitialState = {
  tableData: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState: tableInitialState,
  reducers: {
    getTableData(state, action) {
      state.tableData = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { data: tableSlice.reducer },
});

export const tableActions = tableSlice.actions;
export default store;

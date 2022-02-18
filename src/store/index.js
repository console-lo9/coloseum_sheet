import { configureStore, createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "assets/MOCK_DATA.json";

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

const currentRowSlice = createSlice({
  name: "currentRow",
  initialState: { row: -1 },
  reducers: {
    setCurrentRow(state, action) {
      state.row = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    data: tableSlice.reducer,
    sort: sortDataSlice.reducer,
    currentRow: currentRowSlice.reducer,
  },
});

export const tableActions = tableSlice.actions;
export const sortDataActions = sortDataSlice.actions;
export const currentRowActions = currentRowSlice.actions;

export default store;

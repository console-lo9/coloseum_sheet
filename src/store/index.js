import { configureStore } from "@reduxjs/toolkit";
import currentRowReducer from "./currentRowSlice";
import sortDataReducer from "./sortDataSlice";
import tableReducer from "./tableSlice";

const store = configureStore({
  reducer: {
    data: tableReducer,
    sort: sortDataReducer,
    currentRow: currentRowReducer,
  },
});

export default store;

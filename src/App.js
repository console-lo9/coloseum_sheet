import GlobalStyle from "style/GlobalStyle";
import MainPage from "layout/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "store/tableSlice";
import MOCK_DATA from "assets/MOCK_DATA.json";
import SelectView from "components/SelectView";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tableActions.getTableData(MOCK_DATA));
  }, []);

  return (
    <MainPage>
      <GlobalStyle />
      <SelectView />
    </MainPage>
  );
};

export default App;

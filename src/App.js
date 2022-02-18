import Cards from "components/Cards";
import GlobalStyle from "./style/GlobalStyle";
import MainPage from "layout/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "./store";
import MOCK_DATA from "assets/MOCK_DATA.json";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tableActions.getTableData(MOCK_DATA));
  }, []);

  return (
    <MainPage>
      <GlobalStyle />
      <Cards />
    </MainPage>
  );
};

export default App;

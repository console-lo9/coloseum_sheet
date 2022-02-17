import { Fragment } from "react";
import ItemSheet from "components/ItemSheet/ItemSheet";
import GlobalStyle from "./style/GlobalStyle";
import MainPage from "layout/MainPage";

const App = () => {
  return (
    <MainPage>
      <GlobalStyle />
      <ItemSheet />
    </MainPage>
  );
};

export default App;

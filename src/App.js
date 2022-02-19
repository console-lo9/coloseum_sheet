import GlobalStyle from "style/GlobalStyle";
import MainPage from "layout/MainPage";
import SelectView from "components/SelectView";

const App = () => {
  return (
    <MainPage>
      <GlobalStyle />
      <SelectView />
    </MainPage>
  );
};

export default App;

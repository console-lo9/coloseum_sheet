import { Fragment } from "react";
import ItemSheet from "components/ItemSheet/ItemSheet";
import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ItemSheet />
    </Fragment>
  );
};

export default App;

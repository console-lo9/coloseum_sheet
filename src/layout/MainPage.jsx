import React from "react";
import styled from "styled-components";

const MainPage = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  height: 100vh;
`;

export default MainPage;

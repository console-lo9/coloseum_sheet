import React from "react";
import styled from "styled-components";

const MainPage = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export default MainPage;

import React from "react";
import styled from "styled-components";

const MainPage = (props) => {
  return <MainWrapper className="asd">{props.children}</MainWrapper>;
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

export default MainPage;

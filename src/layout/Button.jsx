import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ReuseableButton onClick={props.onClick}>{props.children}</ReuseableButton>
  );
};

const ReuseableButton = styled.button`
  background-color: tomato;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  padding: 2px 6px;
`;
export default Button;

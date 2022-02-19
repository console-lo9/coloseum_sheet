import React from "react";
import styled from "styled-components";
import { CgChevronDoubleUpO, CgChevronDoubleDownO } from "react-icons/cg";

const PortalButton = ({ handleClick, cardView }) => {
  console.log(cardView);
  return (
    <>
      <UpBtnBox
        onClick={handleClick}
        id="upBtn"
        className={cardView ? cardView : ""}
      >
        <CgChevronDoubleUpO />
      </UpBtnBox>
      <DownBtnBox
        onClick={handleClick}
        id="downBtn"
        className={cardView ? cardView : ""}
      >
        <CgChevronDoubleDownO />
      </DownBtnBox>
    </>
  );
};

const UpBtnBox = styled.div`
  position: sticky;
  width: 70px;
  height: 50px;
  z-index: 50;
  opacity: 0.3;
  font-size: 4rem;
  margin-top: -50px;
  top: 60px;
  left: 88%;
  @media screen and (max-width: 1024px) {
    left: 90%;
  }
  &.cardView {
    top: 150px;
    left: 90%;
  }
  svg {
    pointer-events: none;
  }
`;
const DownBtnBox = styled.div`
  position: sticky;
  width: 70px;
  height: 50px;
  z-index: 50;
  opacity: 0.3;
  font-size: 4rem;
  margin-top: -50px;
  top: 160px;
  left: 88%;
  @media screen and (max-width: 1024px) {
    left: 90%;
  }
  &.cardView {
    top: 250px;
    left: 90%;
  }
  svg {
    pointer-events: none;
  }
`;

export default PortalButton;

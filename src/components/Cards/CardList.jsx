import MOCK_DATA from "assets/MOCK_DATA.json";
import Card from "./Card.jsx";
import styled from "styled-components";
import PortalButton from "layout/PortalButton.jsx";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const CardList = () => {
  const cardConRef = useRef();

  const handleClick = (e) => {
    if (e.currentTarget.id === "upBtn") {
      window.scrollTo(
        0,
        window.scrollY - cardConRef.current.scrollHeight * 0.2
      );
    } else if (e.currentTarget.id === "downBtn") {
      window.scrollTo(
        0,
        window.scrollY + cardConRef.current.scrollHeight * 0.2
      );
    }
  };

  return (
    <>
      <PortalButton handleClick={handleClick} cardView="cardView" />
      <CardContainer ref={cardConRef}>
        {Object.entries(MOCK_DATA).map((data, index) => (
          <Card key={index} data={data[1]} />
        ))}
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export default CardList;

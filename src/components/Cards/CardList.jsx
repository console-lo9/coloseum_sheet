import Card from "./Card.jsx";
import styled from "styled-components";
import PortalButton from "layout/PortalButton.jsx";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortDataActions } from "store/sortDataSlice.js";
import SortCard from "./SortCard.jsx";

const CardList = () => {
  const cardConRef = useRef();

  const sortedData = useSelector((state) => state.sort);

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
      <SortCard />
      <PortalButton handleClick={handleClick} cardView="cardView" />
      <CardContainer ref={cardConRef}>
        {Object.entries(sortedData).map((data, index) => (
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

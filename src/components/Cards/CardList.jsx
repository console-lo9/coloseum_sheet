import Card from "./Card.jsx";
import styled from "styled-components";
import PortalButton from "layout/PortalButton.jsx";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import SortCard from "./SortCard.jsx";

const CardList = () => {
  const cardConRef = useRef();
  const [cardHeight, setCardHeight] = useState();

  const sortedData = useSelector((state) => state.sort);

  const handleClick = (e) => {
    if (e.currentTarget.id === "upBtn") {
      cardConRef.current.scrollTop -= cardHeight * 0.2;
    } else if (e.currentTarget.id === "downBtn") {
      cardConRef.current.scrollTop += cardHeight * 0.2;
    }
  };

  useEffect(() => {
    setCardHeight(cardConRef.current.scrollHeight);
  });
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
  overflow: auto;
`;
export default CardList;

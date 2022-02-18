import MOCK_DATA from "assets/MOCK_DATA.json";
import Card from "./Card.jsx";
import styled from "styled-components";

const CardList = () => {
  return (
    <CardContainer>
      {Object.entries(MOCK_DATA).map((data, index) => (
        <Card key={index} data={data[1]} />
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export default CardList;

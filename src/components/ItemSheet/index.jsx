import { useSelector } from "react-redux";
import ItemSheet from "./ItemSheet";
import MOCK_DATA from "assets/MOCK_DATA.json";
import React, { Fragment } from "react";
import Card from "components/Cards/Card";
import * as S from "components/Cards/styles";
import styled from "styled-components";

const Table = () => {
  const currentRow = useSelector((state) => state.currentRow.row);
  return (
    <Fragment>
      {currentRow !== -1 && (
        <CardContainer>
          <Card data={MOCK_DATA[currentRow]} />
        </CardContainer>
      )}
      <ItemSheet />
    </Fragment>
  );
};
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Table;

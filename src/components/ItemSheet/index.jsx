import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import ItemSheet from "./ItemSheet";
import Card from "components/Cards/Card";
import styled from "styled-components";

const Table = () => {
  const sortedData = useSelector((state) => state.sort);
  const currentRow = useSelector((state) => state.currentRow.row);
  return (
    <Fragment>
      {currentRow !== -1 && (
        <CardContainer>
          <Card data={sortedData[currentRow]} />
        </CardContainer>
      )}
      <ItemSheet />
    </Fragment>
  );
};

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;

export default Table;

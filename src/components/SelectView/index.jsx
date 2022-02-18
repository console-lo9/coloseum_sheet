import { Fragment, useState } from "react";
import Cards from "components/Cards";
import ItemSheet from "components/ItemSheet";
import { AiOutlineTable } from "react-icons/ai";
import { BiCard } from "react-icons/bi";
import styled from "styled-components";
import * as Constants from "constants";

const TABLE = "table";
const CARD = "card";

const SelectView = () => {
  const [view, setView] = useState(TABLE);
  const viewHandler = (event) => {
    if (event.target.value === TABLE) {
      setView(TABLE);
    } else if (event.target.value === CARD) {
      setView(CARD);
    }
  };
  return (
    <Fragment>
      <ButtonContainer>
        <ButtonDiv value={TABLE} onClick={viewHandler}>
          <AiOutlineTable size={30} />
        </ButtonDiv>
        <ButtonDiv value={CARD} onClick={viewHandler}>
          <BiCard size={30} />
        </ButtonDiv>
      </ButtonContainer>
      {view === TABLE ? <ItemSheet /> : <Cards />}
    </Fragment>
  );
};

const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
const ButtonDiv = styled.button`
  border-radius: 5px;
  padding: 1px 3px;
  margin-left: 3px;
  &:nth-child(1),
  &:nth-child(2) {
    color: ${Constants.GRAY2};
  }
  &:hover {
    &:nth-child(1),
    &:nth-child(2) {
      color: ${Constants.BLUE};
    }
  }
  svg {
    pointer-events: none;
  }
`;
export default SelectView;

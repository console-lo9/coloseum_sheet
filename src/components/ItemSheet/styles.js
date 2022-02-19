import styled from "styled-components";
import * as Constants from "constants";

export const TableWrapper = styled.div`
  overflow: auto;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Table = styled.table`
  overflow: auto;
  border: 1px solid ${Constants.GRAY4};
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${Constants.GRAY3};
  color: ${Constants.BLACK};
  font-size: 14px;
`;

export const Th = styled.th`
  position: sticky;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${Constants.GRAY4};

  div {
    display: flex;
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

export const Tr = styled.tr`
  padding: 100px;
  background-color: ${(props) =>
    props.clickedId === props.id && `${Constants.LIGHTBLUE}`};
`;

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${Constants.GRAY4};

  background-color: ${(props) =>
    props.clickedId === props.id && `${Constants.LIGHTBLUE}`};
`;

export const SortLabel = styled.label`
  &.active {
    & > svg {
      opacity: 1;
    }
  }
  & > svg {
    opacity: 0;
    color: ${Constants.BLUE};
  }
  &:hover > svg {
    opacity: 1;
  }
`;
export const SortBtn = styled.button``;

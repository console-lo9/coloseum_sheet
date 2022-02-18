import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow: auto;
  height: 85vh;
`;

export const Table = styled.table`
  overflow: auto;
`;

export const Thead = styled.thead`
  position: sticky;
  top: 1px;
  background-color: #fff;
`;

export const Th = styled.th`
  position: sticky;
  padding: 10px;
  outline: 1px solid black;
  text-align: center;
  white-space: nowrap;

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
  background-color: ${(props) => props.clickedId === props.id && "#d9f0f8"};
`;

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  outline: 1px solid black;
  white-space: nowrap;
  background-color: ${(props) => props.clickedId === props.id && "#d9f0f8"};
`;

export const SortLabel = styled.label`
  &.active {
    & > svg {
      opacity: 1;
    }
  }
  & > svg {
    opacity: 0;
    color: red;
  }
  &:hover > svg {
    opacity: 1;
  }
`;
export const SortBtn = styled.button``;

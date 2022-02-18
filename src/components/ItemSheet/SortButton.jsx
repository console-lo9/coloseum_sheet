import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortDataActions } from "store";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styled from "styled-components";

const SortButton = ({ columnName, index, selColumn, setSelColumn }) => {
  const dispatch = useDispatch();
  const [isAscending, setIsAscending] = useState(true);

  const handleClick = (e) => {
    const targetId = e.currentTarget.id;
    if (isAscending) {
      dispatch(sortDataActions.descending(targetId));
      setIsAscending(!isAscending);
    } else {
      dispatch(sortDataActions.ascending(targetId));
      setIsAscending(!isAscending);
    }
    setSelColumn(index);
  };
  return (
    <>
      <SortLabel
        htmlFor={columnName}
        className={index === selColumn ? "active" : ""}
      >
        {isAscending ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </SortLabel>
      <SortBtn id={columnName} onClick={handleClick}></SortBtn>
    </>
  );
};

const SortLabel = styled.label`
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
const SortBtn = styled.button``;

export default SortButton;

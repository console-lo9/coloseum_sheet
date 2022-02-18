import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortDataActions } from "store";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import * as S from "./styles";

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
      <S.SortLabel
        htmlFor={columnName}
        className={index === selColumn ? "active" : ""}
      >
        {isAscending ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </S.SortLabel>
      <S.SortBtn id={columnName} onClick={handleClick}></S.SortBtn>
    </>
  );
};

export default SortButton;

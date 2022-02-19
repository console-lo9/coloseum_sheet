import { Fragment, useState } from "react";

import Cards from "components/Cards";
import ItemSheet from "components/ItemSheet";

import { BiCard } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import * as S from "./styles";

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
      <S.ButtonContainer>
        <S.ButtonDiv value={TABLE} onClick={viewHandler}>
          <AiOutlineTable size={30} />
        </S.ButtonDiv>
        <S.ButtonDiv value={CARD} onClick={viewHandler}>
          <BiCard size={30} />
        </S.ButtonDiv>
      </S.ButtonContainer>
      {view === TABLE ? <ItemSheet /> : <Cards />}
    </Fragment>
  );
};

export default SelectView;

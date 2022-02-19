import * as S from "./styles";
import * as Constants from "constants";

const CardCollo = ({ name, code, id }) => {
  return (
    <S.ItemContainer>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.COLLO_NAME}</S.ItemTitle>
          <S.ItemContent>{name}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.COLLO_CODE}</S.ItemTitle>
          <S.ItemContent>{code}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.COLLO_ID}</S.ItemTitle>
          <S.ItemContent>{id}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
    </S.ItemContainer>
  );
};

export default CardCollo;

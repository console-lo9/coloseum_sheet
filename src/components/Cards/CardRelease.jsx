import * as S from "./styles";
import * as Constants from "constants";
const CardRelease = ({ name, quantity, cancel }) => {
  return (
    <S.ItemContainer>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.WAREHOUSE_NAME}</S.ItemTitle>
          <S.ItemContent>{name}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.RELEASE_QUANTITY}</S.ItemTitle>
          <S.ItemContent>{quantity}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.RELEASE_CANCEL}</S.ItemTitle>
          <S.ItemContent>{cancel}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
    </S.ItemContainer>
  );
};

export default CardRelease;

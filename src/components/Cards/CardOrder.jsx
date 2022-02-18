import * as S from "./styles";
import * as Constants from "constants";
const CardOrder = ({ form, number, name, orderer, quantity, unit, id }) => {
  return (
    <S.ItemContainer>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_FORM}</S.ItemTitle>
          <S.ItemContent>{form}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_NUMBER}</S.ItemTitle>
          <S.ItemContent>{number}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_NAME}</S.ItemTitle>
          <S.ItemContent>{name}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDERER}</S.ItemTitle>
          <S.ItemContent>{orderer}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_QUANTITY}</S.ItemTitle>
          <S.ItemContent>{quantity}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_UNIT}</S.ItemTitle>
          <S.ItemContent>{unit}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>{Constants.ORDER_INFO_ID}</S.ItemTitle>
          <S.ItemContent>{id}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
    </S.ItemContainer>
  );
};

export default CardOrder;

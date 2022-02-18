import * as S from "./styles";
const CardOrder = ({ form, number, name, orderer, quantity, unit, id }) => {
  return (
    <S.ItemContainer>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문서 양식</S.ItemTitle>
          <S.ItemContent>{form}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문 번호</S.ItemTitle>
          <S.ItemContent>{number}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문명</S.ItemTitle>
          <S.ItemContent>{name}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문자</S.ItemTitle>
          <S.ItemContent>{orderer}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문 수량</S.ItemTitle>
          <S.ItemContent>{quantity}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문 단위</S.ItemTitle>
          <S.ItemContent>{unit}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>주문정보ID</S.ItemTitle>
          <S.ItemContent>{id}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
    </S.ItemContainer>
  );
};

export default CardOrder;

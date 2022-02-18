import * as S from "./styles";
const CardRelease = ({ name, quantity, cancel }) => {
  return (
    <S.ItemContainer>
      <S.RowDiv>
        <S.ItemDiv>
          <S.ItemTitle>출고창고명</S.ItemTitle>
          <S.ItemContent>{name}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>출고수량</S.ItemTitle>
          <S.ItemContent>{quantity}</S.ItemContent>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.ItemTitle>출고취소</S.ItemTitle>
          <S.ItemContent>{cancel}</S.ItemContent>
        </S.ItemDiv>
      </S.RowDiv>
    </S.ItemContainer>
  );
};

export default CardRelease;

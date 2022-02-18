import styled from "styled-components";
import * as S from "./styles";
const CardRest = ({ change, id, isLack, mappingState }) => {
  return (
    <S.RowDiv>
      <S.ItemDiv>
        <S.ItemTitle>수량변경</S.ItemTitle>
        <S.ItemContent>{change}</S.ItemContent>
      </S.ItemDiv>
      <S.ItemDiv>
        <S.ItemTitle>연동상품ID</S.ItemTitle>
        <S.ItemContent>{id}</S.ItemContent>
      </S.ItemDiv>
      <S.ItemDiv>
        <S.ItemTitle>재고부족여부</S.ItemTitle>
        <S.Button content={isLack}>{isLack}</S.Button>
      </S.ItemDiv>
      <ButtonDiv>
        <S.ItemTitle>매핑상태</S.ItemTitle>
        <S.Button content={mappingState}>{mappingState}</S.Button>
      </ButtonDiv>
    </S.RowDiv>
  );
};

const ButtonDiv = styled(S.ItemDiv)`
  width: 97px;
`;

export default CardRest;

import styled from "styled-components";
import * as S from "./styles";
import * as Constants from "constants";
const CardRest = ({ change, id, isLack, mappingState }) => {
  return (
    <S.RowDiv>
      <S.ItemDiv>
        <S.ItemTitle>{Constants.QUANTITY_CHANGE}</S.ItemTitle>
        <S.ItemContent>{change}</S.ItemContent>
      </S.ItemDiv>
      <S.ItemDiv>
        <S.ItemTitle>{Constants.LINKED_PRODUCT_ID}</S.ItemTitle>
        <S.ItemContent>{id}</S.ItemContent>
      </S.ItemDiv>
      <S.ItemDiv>
        <S.ItemTitle>{Constants.INVENTORY_LACK}</S.ItemTitle>
        <S.Button content={isLack}>{isLack}</S.Button>
      </S.ItemDiv>
      <ButtonDiv>
        <S.ItemTitle>{Constants.MAPPING_STATE}</S.ItemTitle>
        <S.Button content={mappingState}>{mappingState}</S.Button>
      </ButtonDiv>
    </S.RowDiv>
  );
};

const ButtonDiv = styled(S.ItemDiv)`
  width: 97px;
`;

export default CardRest;

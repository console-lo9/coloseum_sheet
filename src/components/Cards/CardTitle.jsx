import * as S from "./styles";

const CardTitle = ({ title, data, number }) => {
  return (
    <S.TitleContainer>
      <S.Title>{title}</S.Title>
      <S.DataDiv>
        <S.Data>{data}</S.Data>
        <S.OrderNum>{number}</S.OrderNum>
      </S.DataDiv>
    </S.TitleContainer>
  );
};

export default CardTitle;

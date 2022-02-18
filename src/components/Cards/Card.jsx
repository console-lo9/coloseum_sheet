import * as S from "./styles";
import CardColo from "./CardColo";
import CardOrder from "./CardOrder";
import CardRelease from "./CardRelease";
import CardRest from "./CardRest";
import CardTitle from "./CardTitle";

const Card = ({ data }) => {
  if (!data) return <div>로딩중</div>;
  return (
    <S.CardContainer>
      <CardTitle
        title={data["출고시 파일명"]}
        data={data["데이터 출처"]}
        number={data["엑셀 행 순번"]}
      />
      <CardOrder
        form={data["주문서 양식"]}
        number={data["주문번호"]}
        name={data["주문명"]}
        orderer={data["주문자"]}
        quantity={data["주문수량"]}
        unit={data["주문단위"]}
        id={data["주문정보ID"]}
      />
      <CardColo
        name={data["콜로상품명"]}
        code={data["콜로상품코드"]}
        id={data["콜로상품ID"]}
      />
      <CardRelease
        name={data["출고창고명"]}
        quantity={data["출고수량"]}
        cancel={data["출고취소"]}
      />
      <CardRest
        change={data["수량변경"]}
        id={data["연동상품ID"]}
        isLack={data["재고부족여부"]}
        mappingState={data["매핑 상태"]}
      />
    </S.CardContainer>
  );
};

export default Card;

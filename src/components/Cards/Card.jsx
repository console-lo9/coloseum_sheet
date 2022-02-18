import * as S from "./styles";
import CardCollo from "./CardCollo";
import CardOrder from "./CardOrder";
import CardRelease from "./CardRelease";
import CardRest from "./CardRest";
import CardTitle from "./CardTitle";
import * as Constants from "constants";

const Card = ({ data }) => {
  if (!data) return <div>로딩중</div>;
  return (
    <S.CardContainer>
      <CardTitle
        title={data[Constants.FILE_NAME]}
        data={data[Constants.DATA_SOURCE]}
        number={data[Constants.ROW_ORDER]}
      />
      <CardOrder
        form={data[Constants.ORDER_FORM]}
        number={data[Constants.ORDER_NUMBER]}
        name={data[Constants.ORDER_NAME]}
        orderer={data[Constants.ORDERER]}
        quantity={data[Constants.ORDER_QUANTITY]}
        unit={data[Constants.ORDER_UNIT]}
        id={data[Constants.ORDER_INFO_ID]}
      />
      <CardCollo
        name={data[Constants.COLLO_NAME]}
        code={data[Constants.COLLO_CODE]}
        id={data[Constants.COLLO_ID]}
      />
      <CardRelease
        name={data[Constants.WAREHOUSE_NAME]}
        quantity={data[Constants.RELEASE_QUANTITY]}
        cancel={data[Constants.RELEASE_CANCEL]}
      />
      <CardRest
        change={data[Constants.QUANTITY_CHANGE]}
        id={data[Constants.LINKED_PRODUCT_ID]}
        isLack={data[Constants.INVENTORY_LACK]}
        mappingState={data[Constants.MAPPING_STATE]}
      />
    </S.CardContainer>
  );
};

export default Card;

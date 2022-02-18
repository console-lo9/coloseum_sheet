import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  padding: 15px 0px 0px 15px;
  margin: 5px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  color: #0f58ca;
  font-size: 26px;
  font-weight: 700;
`;
export const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #707070;
  font-size: 14px;

  position: absolute;
  top: 10px;
  right: 7px;
`;
export const Data = styled.div``;
export const OrderNum = styled.div``;

export const ItemContainer = styled.div`
  border-bottom: 1px solid #c4c4c4;
`;
export const RowDiv = styled.div`
  display: flex;
  margin: 20px 0;
`;
export const ItemDiv = styled.div`
  margin-right: 20px;
  width: 90px;
`;
export const ItemTitle = styled.div`
  font-size: 13px;
  color: #707070;
`;
export const ItemContent = styled.div`
  font-size: 14px;
  color: #000000;
`;
export const Button = styled.button`
  font-size: 13px;
  border: 1px solid #0f58ca;
  border-radius: 5px;
  color: #0f58ca;
  padding: 4px 8px;
`;

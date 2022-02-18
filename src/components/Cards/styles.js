import styled, { css } from "styled-components";
import * as Constants from "constants";

export const CardContainer = styled.div`
  position: relative;
  border: 2px solid #c4c4c4;
  border-radius: 5px;
  padding: 15px 0px 0px 0px;
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
  @media ${Constants.mobile} {
    font-size: 20px;
  }
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

  @media ${Constants.mobile} {
    font-size: 12px;
  }
`;
export const Data = styled.div``;
export const OrderNum = styled.div``;

export const ItemContainer = styled.div`
  border-bottom: 1px solid #c4c4c4;
`;
export const RowDiv = styled.div`
  display: flex;
  margin: 20px 0;
  padding-left: 15px;
  @media ${Constants.mobile} {
    margin: 15px 0;
  }
`;
export const ItemDiv = styled.div`
  margin-right: 20px;
  width: 90px;
  @media ${Constants.mobile} {
    margin-right: 15px;
    width: 77px;
  }
`;
export const ItemTitle = styled.div`
  font-size: 13px;
  color: #707070;
  @media ${Constants.mobile} {
    font-size: 12px;
  }
`;
export const ItemContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  @media ${Constants.mobile} {
    font-size: 12px;
  }
`;
export const Button = styled.button`
  font-size: 13px;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: default;
  ${({ content }) => {
    switch (content) {
      case "출고주문오류":
        return css`
          border: 1px solid #ca0f0f;
          color: #ca0f0f;
        `;
      case "재고부족취소":
      case "주문취소":
        return css`
          border: 1px solid #ca9d07;
          color: #ca9d07;
        `;
      case "주문명세트지정":
        return css`
          border: 1px solid #3b3b3b;
          color: #3b3b3b;
        `;
      default:
        return css`
          border: 1px solid #0f58ca;
          color: #0f58ca;
        `;
    }
  }}
  @media ${Constants.mobile} {
    padding: 3px 6px;
    font-size: 12px;
  }
`;

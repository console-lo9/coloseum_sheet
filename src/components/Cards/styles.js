import styled, { css } from "styled-components";
import * as Constants from "constants";

export const CardContainer = styled.div`
  position: relative;
  border: 2px solid ${Constants.GRAY3};
  border-radius: 5px;
  padding: 15px 0px 0px 0px;
  margin: 5px;
  font-size: 10px;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  color: ${Constants.BLUE};
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
  color: ${Constants.GRAY2};
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
  border-bottom: 1px solid ${Constants.GRAY3};
`;
export const RowDiv = styled.div`
  display: flex;
  margin: 15px 0;
  padding-left: 15px;
  @media ${Constants.mobile} {
    margin: 10px 0;
  }
`;
export const ItemDiv = styled.div`
  margin-right: 10px;
  width: 90px;
  @media ${Constants.mobile} {
    margin-right: 5px;
    width: 77px;
  }
`;
export const ItemTitle = styled.div`
  font-size: 13px;
  color: ${Constants.GRAY2};
  @media ${Constants.mobile} {
    font-size: 12px;
  }
`;
export const ItemContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${Constants.BLACK};
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
          border: 1px solid ${Constants.RED};
          color: ${Constants.RED};
        `;
      case "재고부족취소":
      case "주문취소":
        return css`
          border: 1px solid ${Constants.YELLOW};
          color: ${Constants.YELLOW};
        `;
      case "주문명세트지정":
        return css`
          border: 1px solid ${Constants.GRAY1};
          color: ${Constants.GRAY1};
        `;
      default:
        return css`
          border: 1px solid ${Constants.BLUE};
          color: ${Constants.BLUE};
        `;
    }
  }}
  @media ${Constants.mobile} {
    padding: 3px 6px;
    font-size: 12px;
  }
`;

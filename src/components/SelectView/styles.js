import styled from "styled-components";
import * as Constants from "constants";

export const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;
export const ButtonDiv = styled.button`
  border-radius: 5px;
  padding: 1px 3px;
  margin-left: 3px;
  &:nth-child(1),
  &:nth-child(2) {
    color: ${Constants.GRAY2};
  }
  &:hover {
    &:nth-child(1),
    &:nth-child(2) {
      color: ${Constants.BLUE};
    }
  }
  svg {
    pointer-events: none;
  }
`;

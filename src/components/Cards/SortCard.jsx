import MOCK_DATA from "assets/MOCK_DATA.json";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortDataActions } from "store/sortDataSlice.js";
import * as S from "./styles";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const ASCENDING = "오름차순";
const DESCENDING = "내림차순";
const SortCard = () => {
  const dispatch = useDispatch();
  const keys = Object.keys(MOCK_DATA[0]);
  const [selected, setSelected] = useState("엑셀 행 순번");
  const [isAscending, setIsAscending] = useState(true);

  const selectHandler = (event) => {
    setSelected(event);
    sort(selected);
  };

  const sort = (value) => {
    if (isAscending) {
      dispatch(sortDataActions.ascending(value));
    } else {
      dispatch(sortDataActions.descending(value));
    }
  };
  const buttonHandler = (e) => {
    const value = e.target.value;
    if (value === ASCENDING) {
      setIsAscending(true);
    } else if (value === DESCENDING) {
      setIsAscending(false);
    }
  };
  useEffect(() => {
    sort(selected);
  }, [selected, isAscending]);

  return (
    <S.SortContainer>
      <CustomSelect onChange={selectHandler} defaultValue={"엑셀 행 순번"}>
        {keys.map((item, index) => (
          <StyledOption key={index} value={item}>
            {item}
          </StyledOption>
        ))}
      </CustomSelect>
      <S.ButtonContainer>
        <S.AscendingButton
          value={ASCENDING}
          onClick={buttonHandler}
          isTrue={isAscending}
        >
          오름차순으로
        </S.AscendingButton>
        <S.AscendingButton
          value={DESCENDING}
          onClick={buttonHandler}
          isTrue={!isAscending}
        >
          내림차순으로
        </S.AscendingButton>
      </S.ButtonContainer>
    </S.SortContainer>
  );
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      min-height: calc(1.5em + 22px);
      min-width: 120px;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      border-radius: 0.75em;
      margin: 0.5em;
      padding: 10px;
      text-align: left;
      line-height: 1.5;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    
      &:hover {
        background: ${theme.palette.mode === "dark" ? "" : grey[100]};
        border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
    
      &.${selectUnstyledClasses.focusVisible} {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[100]
        };
      }
    
      &.${selectUnstyledClasses.expanded} {
        &::after {
          content: '▴';
        }
      }
    
      &::after {
        content: '▾';
        float: right;
      }
      `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 5px;
      margin: 10px 0;
      min-width: 120px;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[300]
      };
      border-radius: 0.75em;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      overflow: auto;
      outline: 0px;
      `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
      list-style: none;
      padding: 8px;
      border-radius: 0.45em;
      cursor: default;
    
      &:last-of-type {
        border-bottom: none;
      }
    
      &.${optionUnstyledClasses.selected} {
        background-color: ${
          theme.palette.mode === "dark" ? blue[900] : blue[100]
        };
        color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
      }
    
      &.${optionUnstyledClasses.highlighted} {
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
    
      &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
        background-color: ${
          theme.palette.mode === "dark" ? blue[900] : blue[100]
        };
        color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
      }
    
      &.${optionUnstyledClasses.disabled} {
        color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
    
      &:hover:not(.${optionUnstyledClasses.disabled}) {
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
      `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

export default SortCard;

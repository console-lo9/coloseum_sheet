import React, { useEffect, useRef, useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import { useDispatch, useSelector } from "react-redux";
import SortButton from "./SortButton";
import { setCurrentRow } from "store/currentRowSlice";
import PortalButton from "layout/PortalButton";
import * as S from "./styles";

const ItemSheet = () => {
  const dispatch = useDispatch();

  const [clickedId, setClickedId] = useState();
  const [clickedRowId, setClickedRowId] = useState();
  const sortedData = useSelector((state) => state.sort);

  const keys = Object.keys(MOCK_DATA[0]);
  const [rows, setRows] = useState(keys);
  const [selColumn, setSelColumn] = useState(null);
  const [selected, setSelected] = useState([]);
  const outsideRef = useRef();

  const tableRef = useRef();
  const [tableHeight, setTableHeight] = useState();

  const clickHandler = () => {
    dispatch(setCurrentRow(clickedRowId));
  };

  const isCheckedHandler = (event) => {
    const currentValue = event.target.value;
    selectedHandler(currentValue);
  };

  const setHighLightHandler = (event) => {
    const clickedId = Number(event.target.id);
    setClickedId(clickedId);
  };

  const setRowHighLightHandler = (event) => {
    const clickedTrId = Number(event.target.parentElement.id);
    setClickedRowId(clickedTrId);
  };

  const selectedHandler = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        dispatch(setCurrentRow(-1));
      }
    };
    document.addEventListener("click", clickOutsideHandler);
    setRows(Array.from(new Set([...selected, ...rows])));
    setTableHeight(tableRef.current.getBoundingClientRect().height);

    return () => {
      document.removeEventListener("click", clickOutsideHandler);
    };
  }, [clickedRowId, outsideRef, selected]);

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === "upBtn") {
      outsideRef.current.scrollTop -= tableHeight * 0.2;
    } else if (e.currentTarget.id === "downBtn") {
      outsideRef.current.scrollTop += tableHeight * 0.2;
    }
  };

  return (
    <S.TableWrapper ref={outsideRef}>
      <PortalButton handleClick={handleClick} />
      <S.Table>
        <S.Thead>
          <tr>
            {rows.map((key, index) => (
              <S.Th key={index}>
                <div>
                  <span>{key}</span>
                  <SortButton
                    columnName={key}
                    index={index}
                    selColumn={selColumn}
                    setSelColumn={setSelColumn}
                  />
                  <span>
                    <input
                      type="checkbox"
                      value={key}
                      onChange={isCheckedHandler}
                      checked={selected.includes(key)}
                    />
                  </span>
                </div>
              </S.Th>
            ))}
          </tr>
        </S.Thead>
        <tbody ref={tableRef}>
          {sortedData.map((data, index) => (
            <S.Tr
              key={index}
              id={index}
              onMouseOver={setRowHighLightHandler}
              clickedId={clickedRowId}
            >
              {Object.values(data).map((value, index) => (
                <S.Td
                  key={index}
                  id={index}
                  onMouseOver={setHighLightHandler}
                  clickedId={clickedId}
                  onClick={clickHandler}
                >
                  {data[rows[index]]}
                </S.Td>
              ))}
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default ItemSheet;

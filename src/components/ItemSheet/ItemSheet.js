import React, { useEffect, useRef, useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SortButton from "./SortButton";
import { setCurrentRow } from "store/currentRowSlice";
import * as Constants from "constants";
import PortalButton from "layout/PortalButton";

const ItemSheet = () => {
  const dispatch = useDispatch();

  const [clickedId, setClickedId] = useState();
  const [clickedRowId, setClickedRowId] = useState();
  const tableData = useSelector((state) => state.data.tableData);
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
    <TableWrapper ref={outsideRef}>
      <PortalButton handleClick={handleClick} />
      <Table>
        <Thead>
          <tr>
            {rows.map((key, index) => (
              <Th key={index}>
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
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody ref={tableRef}>
          {sortedData.map((data, index) => (
            <Tr
              key={index}
              id={index}
              onMouseOver={setRowHighLightHandler}
              clickedId={clickedRowId}
            >
              {Object.values(data).map((value, index) => (
                <Td
                  key={index}
                  id={index}
                  onMouseOver={setHighLightHandler}
                  clickedId={clickedId}
                  onClick={clickHandler}
                >
                  {data[rows[index]]}
                </Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow: auto;
  height: 90vh;
  position: relative;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Table = styled.table`
  overflow: auto;
  border: 1px solid ${Constants.GRAY4};
  border-collapse: collapse;
`;

const Thead = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${Constants.GRAY3};
  color: ${Constants.BLACK};
  font-size: 14px;
`;

const Th = styled.th`
  position: sticky;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${Constants.GRAY4};

  div {
    display: flex;
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

const Tr = styled.tr`
  padding: 100px;
  background-color: ${(props) =>
    props.clickedId === props.id && `${Constants.LIGHTBLUE}`};
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${Constants.GRAY4};

  background-color: ${(props) =>
    props.clickedId === props.id && `${Constants.LIGHTBLUE}`};
`;

export default ItemSheet;

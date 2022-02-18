import React, { useEffect, useRef, useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import SortButton from "./SortButton";
import { currentRowActions } from "store";
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
        dispatch(currentRowActions.setCurrentRow(-1));
      }
    };
    document.addEventListener("click", clickOutsideHandler);
    dispatch(currentRowActions.setCurrentRow(clickedRowId));
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
              onClick={setRowHighLightHandler}
              clickedId={clickedRowId}
            >
              {Object.values(data).map((value, index) => (
                <Td
                  key={index}
                  id={index}
                  onClick={setHighLightHandler}
                  clickedId={clickedId}
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
`;

const Table = styled.table`
  overflow: auto;
`;

const Thead = styled.thead`
  position: sticky;
  top: 1px;
  background-color: #fff;
`;

const Th = styled.th`
  position: sticky;
  padding: 10px;
  outline: 1px solid black;
  text-align: center;
  white-space: nowrap;

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
  background-color: ${(props) => props.clickedId === props.id && "#D3DEDC"};
`;

const Td = styled.td`
  padding: 15px;
  text-align: center;
  outline: 1px solid black;
  white-space: nowrap;

  background-color: ${(props) => props.clickedId === props.id && "#D3DEDC"};
`;

export default ItemSheet;

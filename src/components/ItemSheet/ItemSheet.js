import React, { useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import { useSelector } from "react-redux";
import SortButton from "./SortButton";

const ItemSheet = () => {
  const [clickedId, setClickedId] = useState();
  const [clickedRowId, setClickedRowId] = useState();
  const tableData = useSelector((state) => state.data.tableData);

  const keys = Object.keys(MOCK_DATA[0]);

  const isCheckedHandler = (event) => {
    const isChecked = event.target.checked;
    console.log(isChecked);
  };

  const setHighLightHandler = (event) => {
    const clickedId = Number(event.target.id);
    setClickedId(clickedId);
  };

  const setRowHighLightHandler = (event) => {
    const clickedTrId = Number(event.target.parentElement.id);
    setClickedRowId(clickedTrId);
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <tr>
            {keys.map((key, index) => (
              <Th key={index}>
                <div>
                  <span>{key}</span>
                  <span>
                    <input type="checkbox" onChange={isCheckedHandler} />
                  </span>
                </div>
              </Th>
            ))}
          </tr>
        </Thead>
        <tbody>
          {tableData.map((data, index) => (
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
                  {value}
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
`;

const Table = styled.table`
  overflow: auto;
`;

const Thead = styled.thead``;

const Th = styled.th`
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

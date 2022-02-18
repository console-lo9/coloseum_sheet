import React, { useState } from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import { useSelector } from "react-redux";
import SortButton from "./SortButton";
import * as S from "./styles";

const ItemSheet = () => {
  const [clickedId, setClickedId] = useState();
  const [clickedRowId, setClickedRowId] = useState();
  const tableData = useSelector((state) => state.data.tableData);

  const keys = Object.keys(MOCK_DATA[0]);
  const sortedData = useSelector((state) => state.sort);
  const [selColumn, setSelColumn] = useState(null);

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
    <>
      <S.TableWrapper>
        <span>총 계: {tableData.length} 건</span>
        <h1>출고 요청시 매핑 리스트</h1>
        <S.Table>
          <S.Thead>
            <tr>
              {keys.map((key, index) => (
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
                      <input type="checkbox" onChange={isCheckedHandler} />
                    </span>
                  </div>
                </S.Th>
              ))}
            </tr>
          </S.Thead>
          <tbody>
            {sortedData.map((data, index) => (
              <S.Tr
                key={index}
                id={index}
                onClick={setRowHighLightHandler}
                clickedId={clickedRowId}
              >
                {Object.values(data).map((value, index) => (
                  <S.Td
                    key={index}
                    id={index}
                    onClick={setHighLightHandler}
                    clickedId={clickedId}
                  >
                    {value}
                  </S.Td>
                ))}
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>
    </>
  );
};

export default ItemSheet;

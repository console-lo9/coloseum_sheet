import React from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";

const ItemSheet = () => {
  return (
    <div>
      <table>
        <thead>
          <TableHead>데이터 출처</TableHead>
          <TableHead>출고시 파일명</TableHead>
          <TableHead>엑셀 행 순번</TableHead>
          <TableHead>매핑 상태</TableHead>
          <TableHead>주문서 양식</TableHead>
        </thead>
        <tbody>
          {MOCK_DATA.map((data, index) => (
            <tr key={index}>
              <td>{data["데이터 출처"]}</td>
              <td>{data["출고시 파일명"]}</td>
              <td>{data["엑셀 행 순번"]}</td>
              <td>{data["매핑 상태"]}</td>
              <td>{data["주문서 양식"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = styled.th`
  padding-right: 10px;
`;
export default ItemSheet;

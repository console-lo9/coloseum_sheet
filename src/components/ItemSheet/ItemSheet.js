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
            <Tr key={index}>
              <Td>{data["데이터 출처"]}</Td>
              <Td>{data["출고시 파일명"]}</Td>
              <Td>{data["엑셀 행 순번"]}</Td>
              <Td>{data["매핑 상태"]}</Td>
              <Td>{data["주문서 양식"]}</Td>
            </Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = styled.th`
  padding-right: 10px;
`;

const Tr = styled.tr`
  padding: 100px;
`;

const Td = styled.td`
  padding-right: 20px;
  text-align: center;
  outline: solid black;
`;

export default ItemSheet;

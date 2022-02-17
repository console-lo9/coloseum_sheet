import React from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";

const ItemSheet = () => {
  const keys = Object.keys(MOCK_DATA[0]);

  return (
    <div>
      <table>
        <thead>
          {keys.map((key, index) => (
            <TableHead key={{ index }}>{key}</TableHead>
          ))}
        </thead>
        <tbody>
          {MOCK_DATA.map((data, index) => (
            <Tr key={index}>
              {Object.values(data).map((value) => (
                <Td>{value}</Td>
              ))}
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

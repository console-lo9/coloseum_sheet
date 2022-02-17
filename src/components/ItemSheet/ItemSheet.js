import React from "react";
import MOCK_DATA from "assets/MOCK_DATA.json";
import styled from "styled-components";
import SortButton from "./SortButton";

const ItemSheet = () => {
  const keys = Object.keys(MOCK_DATA[0]);

  return (
    <div>
      <table>
        <thead>
          {keys.map((key, index) => (
            <TableHead key={{ index }}>
              {key}
              <SortButton />
            </TableHead>
          ))}
        </thead>
        <tbody>
          {MOCK_DATA.map((data, index) => (
            <tr key={index}>
              {Object.values(data).map((value, index) => (
                <td key={`${index}`}>{value}</td>
              ))}
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

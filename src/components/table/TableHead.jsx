import React from "react";
import styled from "styled-components";

const TableHead = ({ className, values }) => (
  <thead className={className}>
    <tr>
      {values.map(value => (
        <th key={value}>{value}</th>
      ))}
    </tr>
  </thead>
);

const StyledTableHead = styled(TableHead)`
  color: ${props => props.color === 'white' ? 'white' : 'black'};
  background-color: paleturquoise;
`;

export default StyledTableHead;

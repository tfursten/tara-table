import React from "react";
import styled from "styled-components";

const TableRow = ({ className, children }) => (
  <tr className={className}>
    {children}
  </tr>
);

const StyledTableRow = styled(TableRow)`
  background-color: palevioletred;

`;

export default StyledTableRow;

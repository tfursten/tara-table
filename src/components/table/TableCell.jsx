import React from "react";
import styled from "styled-components";

const TableCell = ({ className, children }) => (
  <td className={className}>
    {children}
  </td>
);

const StyledTableCell = styled(TableCell)`
  background-color: palegreen;
  text-align: center;
`;

export default StyledTableCell;

import React from "react";
import styled from "styled-components";

const TableBody = ({ className, children }) => (
  <tbody className={className}>
    {children}
  </tbody>
);

const StyledTableBody = styled(TableBody)`
  background-color: palegoldenrod;
`;

export default StyledTableBody;

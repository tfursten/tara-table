import React from "react";
import styled from "styled-components";

const Table = ({ children, className }) => (
  <table id="table" className={className}>
    {children}
  </table>
);

const StyledTable = styled(Table)`
  width: 100%;
  border: 2px solid black;
`;

export default StyledTable;

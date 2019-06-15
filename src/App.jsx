import React from "react";
import styled from 'styled-components'

import Table from "./components/table/Table";
import TableHead from "./components/table/TableHead";
import TableBody from "./components/table/TableBody";
import TableRow from "./components/table/TableRow";
import TableCell from "./components/table/TableCell";

const Title = styled('h1')`
  text-align: center;
`

const buildRow = data => (
  <TableRow>
    <TableCell>{data.name}</TableCell>
    {
      data.values.map(item => <TableCell key={item}>{item}</TableCell>)
    }
  </TableRow>
)

const buildTree = (data) => {

  if (data.name === 'root') {
    return;
  }

  if (data.children.length === 0) {
    return buildRow(data)
  }

  return (
    <TableBody key={data.name + data.level}>
      {buildRow(data)}
      {data.children.map(item => buildTree(item))}
    </TableBody>
  )

}

const App = ({ data }) => 
    <div className="App">
      <Title>{"Tara's Cool Table Thingy"}</Title>
      <Table className="table">
        <TableHead
          className="table-head"
          values={data.values.map(value => value)}
        />
        { buildTree(data) }
      </Table>
    </div>

export default App
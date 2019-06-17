import React from "react";
import styled from 'styled-components'

// import Table from "./components/table/Table";
// import TableHead from "./components/table/TableHead";
// import TableBody from "./components/table/TableBody";
// import TableRow from "./components/table/TableRow";
// import TableCell from "./components/table/TableCell";

const Title = styled('h1')`
  text-align: center;
`

// const buildRow = data => (
//   <TableRow>
//     <TableCell>{data.name}</TableCell>
//     {
//       data.values.map(item => <TableCell key={item}>{item}</TableCell>)
//     }
//   </TableRow>
// )

const List = styled('ul')`
  list-style: none;
`

const ListItem = styled('li')`
  list-style-type: none;
  margin: 1em;

  &.expando:before {
    content: "▶";
    display: block;
    height: 0;
    width: 0;
    left: -1.2em;
    position: relative;
  }
`

const buildTree = (data) => {

  if (data.children.length === 0) {
    return <ListItem key={data.name}>
      {`Name: ${data.name}, Values: ${data.values.map(value => value).join(', ')}`}
    </ListItem>
  }

  const row = data.name !== 'root' &&
    <ListItem className="expando">
      {`${data.name} - ${data.level}, Values: ${data.values.map(value=>value).join(', ')}`}
    </ListItem>

  return (
    <List key={data.name}>
      {row}
      {data.children.map(item => buildTree(item))}
    </List>
  )

}

const App = ({ data }) => 
    <div className="App">
      <Title>{"Tara's Cool Table Thingy"}</Title>
      <List>
        <ListItem>{`${data.values.map(value => value).join(', ')}`}</ListItem>
          { buildTree(data) }
      </List>
    </div>

export default App
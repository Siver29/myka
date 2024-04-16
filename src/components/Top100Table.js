import Table from "react-bootstrap/Table";
function Top100Table(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Rank</th>
          <th>{props.header[0]}</th>
          <th>{props.header[1]}</th>
          <th>{props.header[2]}</th>
          <th>{props.header[3]}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item,index) => (
            <tr key={item.firstArgument}>
              <td>#{index}</td>
              <td>{item.firstArgument}</td>
              <td>{item.secondArgument}</td>
              <td>{item.thirdArgument}</td>
              <td>{item.fourthArgument}</td>
            </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Top100Table;

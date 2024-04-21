import Table from "react-bootstrap/Table";
import './Top100Table.css'
function Top100Table(props) {
  return (
    <Table striped bordered hover size="sm" className="bostion">
      <thead className="stickyHeader">
        <tr>
          <th className="sticky">Rank</th>
          <th className="sticky">{props.header[0]}</th>
          <th className="sticky">{props.header[1]}</th>
          <th className="sticky">{props.header[2]}</th>
          <th className="sticky">{props.header[3]}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item,index) => (
            <tr key={item.firstArgument}>
              <td>#{index+1}</td>
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

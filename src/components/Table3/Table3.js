import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Table3.css'

function Table3(props) {
    return (
        <Table striped bordered hover size="sm" >
            <thead >
                <tr className="tableRow">
                    <th className="Table3cs">Rank</th>
                    <th className="Table3cs">{props.header[0]}</th>
                    <th className="Table3cs">{props.header[1]}</th>
                    <th className="Table3cs">{props.header[2]}</th>
                    <th className="Table3cs">{props.header[3]}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index) => (
                    <>
                        <tr>
                            <td>#{index+1}</td>
                            <td>{item.episodeName}</td>
                            <td>{item.episodeStatus}</td>
                            <td>{item.played}</td>
                            <td>{item.date}</td>
                        </tr>
                    </>
                ))}
            </tbody>
        </Table>
    );
}

export default Table3;
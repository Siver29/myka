import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Table3.css'

function Table3(props) {
    return (
        <Table striped bordered hover size="sm" >
            <thead>
                <tr className="tableRow borderNone padding2px">
                    <th className="Table3cs borderNone">Rank</th>
                    <th className="Table3cs borderNone">{props.header[0]}</th>
                    <th className="Table3cs borderNone">{props.header[1]}</th>
                    <th className="Table3cs borderNone">{props.header[2]}</th>
                    <th className="Table3cs borderNone">{props.header[3]}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((item,index) => (
                    <>
                        <tr className="borderNone">
                            <td className="borderNone">#{index+1}</td>
                            <td className="borderNone">{item.episodeName}</td>
                            <td className="borderNone">{item.episodeStatus}</td>
                            <td className="borderNone">{item.played}</td>
                            <td className="borderNone">{item.date}</td>
                        </tr>
                    </>
                ))}
            </tbody>
        </Table>
    );
}

export default Table3;
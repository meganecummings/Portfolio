import React from 'react';
import {Table} from 'react-bootstrap';



const Languages = () => {
    return(
        <>
            <Table hover>
                <tbody className="table keyword">
                <tr>
                    <td className="react"><i className="fab fa-react"></i> React</td>
                    <td className="node"><i className="fab fa-node"></i> Node.js</td>
                    <td className="express"><i className="fas fa-server"></i> Express</td>
                    <td className="mongoose"><i className="fab fa-database"></i> Mongoose </td>
                </tr>
            </tbody >
            </Table>

        </>
    );
};

export default Languages;
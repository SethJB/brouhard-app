import React from 'react';

const table = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <table>
                <tr>{props.headers}</tr>
                {props.data}
            </table>
        </div>
    );
}


export default table;
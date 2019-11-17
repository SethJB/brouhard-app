import React from 'react';

const table = (props) => {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <table>                
                <thead>
                    <tr>{props.headers}</tr>
                </thead>
                <tbody>
                    {props.data}
                </tbody>
            </table>
        </div>
    );
}


export default table;
import React, { Component } from 'react';
import './Display.module.css';
import axios from '../axios';
import Table from '../Table/Table';


class Display extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    state = {
        headers: [],               
    }

    getSampleData = () => {
        axios.get('/Sample.json')
            .then(response => {
                console.log(response.data);              
            })
            .catch(error => {
                console.log('Error',error);
            });
    }
    getHeaders = (headers) => {
        return headers.map((header, index) => {
             return <th key={index}>{header}</th>
         });
    }
    getData = () => {
        this.getSampleData();
        const a = ['data1','data2']
        return a.map((data, index) => {
            return ( 
                <tr>
                    <td>{data}</td>
                    <td>{index}</td>
                </tr>
            )
        });
    }
    render(){
        const headers = ['header1','header2']
        return (
            <div className="Display"> 
            
            Display
            <Table title="Data" headers={this.getHeaders(headers)} data={this.getData()}/>
            </div>
        )
    }
}

export default Display;
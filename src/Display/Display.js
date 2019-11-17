import React, { Component } from 'react';
import './Display.module.css';
import axios from '../axios';
import Table from '../Table/Table';
import Button from '../Button/Button';


class Display extends Component {
    state = {
        title: "",
        headers: [],  
        showTable: false,     
        featureData: [],
        description: "",
    }

    getSampleData = () => {
        axios.get('/Sample.json')
            .then(response => {
                this.setState({
                    title: response.data.Title,
                    featureData: response.data.FeatureData,
                    description: response.data.Description,
                    showTable: true, 
                });            
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
    mapData = (data) => {
        return data.map((data, index) => {
            return ( 
                <tr key={index} >
                    <td>{data.geometry.type}</td>
                    <td>{data.geometry.coordinates.join(' , ')}</td>
                    <td>{data.id}</td>
                    <td>{data.properties.wikipedia}</td>
                    <td>{data.properties.city}</td>
                    <td>{data.type}</td>
                </tr>
            )
        });
    }
    render(){
       
        const headers = ['Geometry Type', 'Coordinates','Id', 'Wikipedia','City','Type']
        return (
            <div className="Display"> 
                <Button clicked={() => this.getSampleData()}>
                            Retrieve Data
                    </Button>
                {this.state.showTable &&
                    <div className="NewTable">
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.description}</h2>
                        <Table title="Feature Data" headers={this.getHeaders(headers)} data={this.mapData(this.state.featureData)}/>
                    </div>
                }
            </div>
        )
    }
}

export default Display;
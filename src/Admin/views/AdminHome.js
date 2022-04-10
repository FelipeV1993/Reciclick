import React, { Component } from 'react'
import ChartBar from '../components/ChartBar';
import BasicTable from '../components/BasicTable';

export default class AdminHome extends Component {
    render() {
        return (           
            <div>
                <ChartBar />
                <BasicTable />   
            </div>           
        )            
    }
}

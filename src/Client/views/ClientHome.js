import React, { Component } from 'react'
import ChartPie from '../components/ChartPie'
import ListBoxes from '../components/ListBoxes';

export default class ClientHome extends Component {
  render() {
    return (
      <div>      
        <ChartPie />
        <ListBoxes />                 
      </div>
    )          
  }
}

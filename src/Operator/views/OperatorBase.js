import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import ButtonAppBar from '../components/ButtonAppBar'


export default class OperatorBase extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <Outlet />
            </div>
        )            
    }
}

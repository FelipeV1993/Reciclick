import React, { Component } from 'react';

import axios from 'axios';

import Cookies from 'universal-cookie';
import Button from '@mui/material/Button';




const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}

const baseUrl="http://localhost:3002/api/auth/login";
const cookies = new Cookies();

class LoginAdmin extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios({
            method: 'POST',
            url: "http://localhost:3002/api/auth/login",
            data:{
                email: this.state.form.username,
                password: this.state.form.password
            }
        })
        .then(response=>{
            return response.data;
        })
        .then(response=>{    
                window.location.href="./admin_home";
                alert('El usuario o la contraseña son correctos');
           
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
            <div>hola</div>
        );
    }
}

export default LoginAdmin;

/* <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div> */
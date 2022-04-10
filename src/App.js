//functional components
import React from 'react';  
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AdminBase from './Admin/views/AdminBase';
import AdminClientes from './Admin/views/AdminClientes';
import AdminHome from './Admin/views/AdminHome';
import Login from './Admin/views/AdminLogin';
import ClientBase from './Client/views/ClientBase';
import ClientHome from './Client/views/ClientHome'
import ClientDay from './Client/views/ClientDay';
import ClientMonth from './Client/views/ClientMonth';
import ClientAnual from './Client/views/ClientAnual';
import ClientProfile from './Client/views/ClientProfile';
import ClientEco from './Client/views/ClientEcoquivalencia'
import OperatorBase from './Operator/views/OperatorBase';
import OperatorHome from './Operator/views/OpertorHome';
import OperatorHorario from './Operator/views/OperatorHorario';
import OperatorPesaje from './Operator/views/OperatorPesaje';
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="client"> cliente </Link>
        <Link to="admin"> Admin </Link>
        <Link to="operador"> Operator </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} >
        </Route>
        <Route path="client" element={<ClientBase />} >
          <Route path="home" element={<ClientHome />} />
          <Route path="day" element={<ClientDay />} />
          <Route path="month" element={<ClientMonth />} />
          <Route path="anual" element={<ClientAnual />} />
          <Route path="ecoquivalencia" element={<ClientEco />} />
          <Route path="profile" element={<ClientProfile />} />
        </Route>        
        <Route path="admin" element={<AdminBase />} >
          <Route path="home" element={<AdminHome />} />
          <Route path="client" element={<AdminClientes />} />
        </Route>
        <Route path="operador" element={<OperatorBase />} >
          <Route path="home" element={<OperatorHome />} />
          <Route path="horario" element={<OperatorHorario />} />
          <Route path="pesaje" element={<OperatorPesaje />} />
        </Route>      
      </Routes>
{/*       <>
        <Switch>
        <Route exact path="/"> 
          <Login />
        </Route>
        <Route exact path="/admin">           
          <Login />
        </Route>
        <Route path= "/home">
          <ClientHome />
        </Route>
        <Route path= "/client_month">
          <ClientMonth />
        </Route>
        <Route path= "/login-admin">
          admin
          <LoginAdmin />
        </Route>
        <Route path= "/admin_home">
          <AdminHome />
        </Route>
        <Route path= "/admin_clientes">
          <AdminClientes />
        </Route>
        <Route path= "/test">
          <Crud2 />
        </Route>
        <Route path= "/pruebas">
          <Crudmui />
        </Route>
        <Route path= "/client_profile">
          <ClientProfile />
        </Route>         
        </Switch>
      </> */}
    </Router>
  )
}
export default App;
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import AddCircleIcon from '@mui/icons-material/AddCircle';

import "bootstrap/dist/css/bootstrap.min.css";
import {
  
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



function createData(nombreEmpresa,producto,pesaje,total,nombre,apellido,email,ciudad,provincia,rut,) {
  return {
    nombreEmpresa,
    producto,
    pesaje,
    total,
    nombre,
    apellido,
    email,
    ciudad,
    provincia,
    rut,
    
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombreEmpresa}
        </TableCell>
        <TableCell align="center">{row.producto}</TableCell>
        <TableCell align="center">{row.pesaje}</TableCell>
        <TableCell align="center">{row.total}</TableCell>
        <TableCell align="center"> {/*  aca tiene los botones de acciones editar eliminar */}  
            <Button 
                style={{ backgroundColor: "#FF9800", color: "black" }} 
                variant="contained" 
                startIcon={<EditIcon />}
                onClick={() => this.mostrarModalActualizar(row)}
            ></Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button  
                style={{ backgroundColor: "#F44336", color: "black" }} 
                variant="contained" 
                startIcon={<DeleteIcon />}
            ></Button>
           
        </TableCell>{/*  aca tiene que los botones de acciones editar eliminar */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informacion Cliente
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">nombre</TableCell>
                    <TableCell align="center">apellido</TableCell>
                    <TableCell align="center">email</TableCell>
                    <TableCell align="center">ciudad</TableCell>
                    <TableCell align="center">provincia</TableCell>
                    <TableCell align="center">rut</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow >
                    <TableCell align="center">{row.nombre}</TableCell>
                    <TableCell align="center">{row.apellido}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.ciudad}</TableCell>
                    <TableCell align="center">{row.provincia}</TableCell>
                    <TableCell align="center">{row.rut}</TableCell>
                    </TableRow>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const data = [
    createData('Mun. iquique',['Metales ', 'Vidrios'], 6, 30, 'mario', 'rodriguez', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
    createData('Mun. aca',['Metales ', 'Vidrios'], 6, 30, 'mario2', 'rodriguez2', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
    createData('Mun. nose',['Metales ', 'Vidrios'], 6, 30, 'mario3', 'rodriguez3', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
    createData('Mun. donde',['Metales ', 'Vidrios'], 6, 30, 'mario4', 'rodriguez4', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
    createData('Mun. quien',['Metales ', 'Vidrios'], 6, 30, 'mario5', 'rodriguez5', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
  ];



class Crud extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      
        nombreEmpresa:"",
        producto:"",
        pesaje:"",
        total:"",
        nombre:"",
        apellido:"",
        email:"",
        ciudad:"",
        provincia:"",
        rut:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.nombreEmpresa === registro.nombreEmpresa) {
        arreglo[contador].nombreEmpresa = dato.nombreEmpresa;
        arreglo[contador].producto = dato.producto;
        arreglo[contador].pesaje = dato.pesaje;
        arreglo[contador].total = dato.total;
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellido = dato.apellido;
        arreglo[contador].email = dato.email;
        arreglo[contador].ciudad = dato.ciudad;
        arreglo[contador].provincia = dato.provincia;
        arreglo[contador].rut = dato.rut;
      }
      
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.nombreEmpresa);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.nombreEmpresa == registro.nombreEmpresa) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
    <Box sx={{ display: 'flex' }}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell> Empresa</TableCell>
            <TableCell align="center"> Producto </TableCell>
            <TableCell align="center"> Pesaje   </TableCell>
            <TableCell align="center"> Total    </TableCell>
            <TableCell align="center"> Accion   </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {this.state.data.map((row) => (
            <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nombreEmpresa}
              </TableCell>
              <TableCell align="center">{row.producto}</TableCell>
              <TableCell align="center">{row.pesaje}</TableCell>
              <TableCell align="center">{row.total}</TableCell>
              <TableCell align="center"> {/*  aca tiene los botones de acciones editar eliminar */}  
                  <Button 
                      style={{ backgroundColor: "#FF9800", color: "black" }} 
                      variant="contained" 
                      startIcon={<EditIcon />}
                      onClick={() => this.mostrarModalActualizar(row)}
                  ></Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button  
                      style={{ backgroundColor: "#F44336", color: "black" }} 
                      variant="contained" 
                      startIcon={<DeleteIcon />}
                  ></Button>
                 
              </TableCell>{/*  aca tiene que los botones de acciones editar eliminar */}
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Informacion Cliente
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">nombre</TableCell>
                          <TableCell align="center">apellido</TableCell>
                          <TableCell align="center">email</TableCell>
                          <TableCell align="center">ciudad</TableCell>
                          <TableCell align="center">provincia</TableCell>
                          <TableCell align="center">rut</TableCell>
                          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                          <TableRow >
                          <TableCell align="center">{row.nombre}</TableCell>
                          <TableCell align="center">{row.apellido}</TableCell>
                          <TableCell align="center">{row.email}</TableCell>
                          <TableCell align="center">{row.ciudad}</TableCell>
                          <TableCell align="center">{row.provincia}</TableCell>
                          <TableCell align="center">{row.rut}</TableCell>
                          </TableRow>
                        
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <IconButton aria-label="fingerprint" color="secondary" style={{ marginTop: `auto` }} onClick={()=>this.mostrarModalInsertar()} >
        <AddCircleIcon  style={{ fontSize: 100, fill: "#4CAF50" }} color='success' sx={{}}/>
      </IconButton >  
      <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="Empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombreEmpresa}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                pesaje: 
              </label>
              <input
                className="form-control"
                name="pesaje"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.pesaje}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                total: 
              </label>
              <input
                className="form-control"
                name="total"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.total}
              />
            </FormGroup>

            <FormGroup>
              <label>
                nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                apellido: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellido}
              />
            </FormGroup>

            <FormGroup>
              <label>
                email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                ciudad: 
              </label>
              <input
                className="form-control"
                name="ciudad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ciudad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                provincia: 
              </label>
              <input
                className="form-control"
                name="provincia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.provincia}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                rut: 
              </label>
              <input
                className="form-control"
                name="rut"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.rut}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar cliente</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>
                Empresa: 
              </label>
              <input
                className="form-control"
                name="Empresa"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              producto: 
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              pesaje: 
              </label>
              <input
                className="form-control"
                name="pesaje"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              total: 
              </label>
              <input
                className="form-control"
                name="total"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              nombre cliente: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              apellido cliente: 
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              ciudad: 
              </label>
              <input
                className="form-control"
                name="ciudad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              provincia: 
              </label>
              <input
                className="form-control"
                name="provincia"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              rut: 
              </label>
              <input
                className="form-control"
                name="rut"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color='success'
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>      
    </Box>
    
    );
  }
}
export default Crud;


/* const rows = [
  createData('Mun. iquique',['metales ', 'vidrios'], 6, 30, 'mario', 'rodriguez', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
  createData('Mun. aca',['metales ', 'vidrios'], 6, 30, 'mario2', 'rodriguez2', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
  createData('Mun. nose',['metales ', 'vidrios'], 6, 30, 'mario3', 'rodriguez3', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
  createData('Mun. donde',['metales ', 'vidrios'], 6, 30, 'mario4', 'rodriguez4', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
  createData('Mun. quien',['metales ', 'vidrios'], 6, 30, 'mario5', 'rodriguez5', 'toychato@matenme.cl', 'iquique', 'iquique', 123124124,),
];

export default function Crud() {
  return (
    <Box sx={{ display: 'flex' }}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>nombreEmpresa</TableCell>
            <TableCell align="center">producto</TableCell>
            <TableCell align="center">pesaje</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.nombreEmpresa} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <IconButton aria-label="fingerprint" color="secondary" style={{ marginTop: `auto` }}  >
        <AddCircleIcon  style={{ fontSize: 100, fill: "#4CAF50" }} color='success' sx={{}}/>
      </IconButton >        
    </Box>
    
  );
} */
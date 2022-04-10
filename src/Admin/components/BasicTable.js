import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from '@mui/material';
import { TextField } from '@mui/material';

export default function BasicTable() {
  const dataCliente = [
      {id: 1, nombreEmpresa:'Mun. quintero',residuo:['Metales ', 'Vidrios'],total: 1152421,nombre: 'mario',apellido: 'rodriguez',email: 'toychato@matenme.cl',ciudad: 'iquique',provincia: 'iquique',rut: 123124124,},
      /* {id: 2,nombreEmpresa:'Mun. aca',residuo:['metales ', 'vidrios'],total: 2563,nombre: 'mario2',apellido: 'rodriguez2',email: 'toychato@matenme.cl',ciudad: 'iquique',provincia: 'iquique',rut: 123124124,},
      {id: 3,nombreEmpresa:'Mun. nose',residuo:['metales ', 'vidrios'],pesaje: 6,total: 30,nombre: 'mario3',apellido: 'rodriguez3',email: 'toychato@matenme.cl',ciudad: 'iquique',provincia: 'iquique',rut: 123124124,},
      {id: 4,nombreEmpresa:'Mun. donde',residuo:['metales ', 'vidrios'],pesaje: 6,total: 30,nombre: 'mario4',apellido: 'rodriguez4',email: 'toychato@matenme.cl',ciudad: 'iquique',provincia: 'iquique',rut: 123124124,},
      {id: 5,nombreEmpresa:'Mun. quien',residuo:['metales ', 'vidrios'],pesaje: 6,total: 30,nombre: 'mario5',apellido: 'rodriguez5',email: 'toychato@matenme.cl',ciudad: 'iquique',provincia: 'iquique',rut: 123124124,}, */
    ];
  const [data, setData] = useState(dataCliente);
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    let navigate = useNavigate();
    const goNavigate = (route) => {
    navigate(route);
    }
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>              
          <TableCell align="center" component="th" scope="row">{row.nombreEmpresa}</TableCell>
          <TableCell align="center">{row.residuo}</TableCell>
          <TableCell align="center">{row.total}</TableCell>              
        </TableRow>            
      </React.Fragment>
    );
  }    
  
  return (
    
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper 
          elevation={3}
          sx={{
          height: 130,
          }}>
            <br></br>
            <h1>1.152.421 (kg)</h1>
            <TextField
            disabled 
            label=""
            defaultValue="Total Reciclado"
            variant="standard"
            />                              
          </Paper>              
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex' }}>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                  <TableCell align="center">Empresa</TableCell>
                  <TableCell align="center">Residuo</TableCell>
                  <TableCell align="center">Total (Kg)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                  <Row key={row.id} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>   
        </Grid>
      </Grid>
    
  );
}
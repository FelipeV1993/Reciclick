import React from 'react';
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
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import { DataClients } from '../redux/DataClients';

export default function Crud() {
  var dataCliente = DataClients
  const data = dataCliente  
  function Row(props) {
    const { row } = props;
    const keyList = Object.keys(row.productQuantity).sort()
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
          <TableCell align="center" component="th" scope="row">{row.nameCompany}</TableCell>
          <TableCell align="center">{row.productCategory}</TableCell>
          <TableCell align="center">{row.totalQuantity}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Pesajes del cliente
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    {
                      keyList.map((_key)=>
                        <TableRow>
                          <TableCell align="center">{_key}</TableCell>
                          <TableCell align="center">{row['productQuantity'][_key]}</TableCell> 
                        </TableRow>
                      )
                    }
                  </TableHead>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }     
  return (
    <div>
      <Toolbar  />
      <h1>Clientes</h1>
      <Grid item xs={12}> 
        <Box sx={{ display: 'flex' }}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="center">nombre empresa</TableCell>
                  <TableCell align="center">productos</TableCell>
                  <TableCell align="center">Pesaje Total(Kg)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>                
        </Box>
      </Grid>
    </div>
  );
}
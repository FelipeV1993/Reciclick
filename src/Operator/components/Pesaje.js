import React, { Component } from 'react'
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from './DatePicker';
import { DataClients } from '../redux/DataClients';

var Clientes = DataClients
/* const Clientes = [
  {
    nameCompany: "Mun. quintero",
  },
  {
    nameCompany: "Mun. aca",
  },
  {
    nameCompany: "Mun. copiapo",
  },
  {
    nameCompany: "Mun. osorno",
  },
]; */

export default function Pesaje() {
  const [client, setClient] = React.useState('Selecione Cliente');

  const handleChange = (event) => {
    setClient(event.target.value);
  };

  return (
    <div>        
      <Box display="flex"
      justifyContent="center"
      alignItems="center"            
      sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
      m: 1,
      width: 350,
      height: 430,
      borderRadius: '16px',
      backgroundColor: 'white'
      },
      }}
      mt={2}
      
      >
        <Paper elevation={4}  >
          <Box  >
            <Grid                
            direction="row" 
            alignItems="center"
            >
              <Grid item xs={12} sx={{  }}>
                <Typography 
                variant="h1" 
                noWrap 
                component="div" 
                sx={{ fontSize: "28px",flexGrow: 1, backgroundColor: '#219653', borderTopLeftRadius: '15px',borderTopRightRadius: '15px',}}
                style={{ color: "white" }} 
                align="center"
                >
                  Pesaje
                </Typography>
              </Grid>
              <Grid 
              item xs={12} 
              container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
              style={{ justifyContent: "center", display: "flex" }} 
              mt={2}
              alignItems="center"
              >
                <DatePicker /> {/* aca esta el cuadro de la fecha a ingresar */}
              </Grid>
              <Grid 
              item xs={12} 
              container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
              style={{ justifyContent: "center", display: "flex" }} 
              mt={2}
              alignItems="stretch"
              >
                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 0, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                >
                  <div>
                    <TextField
                      id="filled-select-client"
                      select
                      label="Selecione Cliente"
                      value={client}
                      onChange={handleChange}
                      variant="filled"
                    >
                      {Clientes.map((option) => (
                        <MenuItem key={option.nameCompany} value={option.nameCompany}>
                          {option.nameCompany}
                        </MenuItem>
                      ))}
                    </TextField>     
                  </div>
                  <Typography 
                variant="h1" 
                noWrap 
                component="div" 
                sx={{ fontSize: "28px",flexGrow: 1, backgroundColor: '#219653', borderRadius: '5px'}}
                mt={1}
                style={{ color: "white" }} 
                align="center"
                >
                  ingreso materiales
                </Typography>
                <Typography 
                variant="h1" 
                noWrap 
                component="div" 
                sx={{ fontSize: "28px",flexGrow: 1, backgroundColor: '#219653', borderRadius: '5px'}}
                mt={1}
                style={{ color: "white" }} 
                align="center"
                >
                  nuevo material
                </Typography>
                </Box>
              </Grid>
                           
            </Grid>         
          </Box>
        </Paper>
      </Box>
    </div>
  )          
}

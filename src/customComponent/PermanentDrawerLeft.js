import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ChartBar from './ChartBar';
import { Grid, Paper } from '@mui/material';
import { TextField } from '@mui/material';
import BasicMenu from '../Admin/components/BasicMenu';
import BasicTable from './BasicTable';
import Avatar from '@mui/material/Avatar';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BalanceIcon from '@mui/icons-material/Balance';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../Assets/img/logo.png'

const drawerWidth = 240;
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const NombreUsuario = "nombre cliente" /* poner el nombre del usuario q entrege el backend */

export default function PermanentDrawerLeft() {
  let history = useHistory();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        style={{backgroundColor: "white"}}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ justifyContent:'flex-end'}}
        >
          <Avatar {...stringAvatar(NombreUsuario)} /> 
          <Typography variant="h6" noWrap component="div" color="#4CAF50">
             {NombreUsuario}
          </Typography>
          <BasicMenu />
          
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
            sx: {
            backgroundColor: "#4CAF50",
            color: "white",
            }
        }}
        
            sx={{
                
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
                <Toolbar style={{backgroundColor: "#388E3C"}}>
                <img src={logo} width={"40px"}/>
                    <Typography variant="h6" noWrap component="div" paddingLeft={"8px"}>
                            Reciclick
                    </Typography>
                </Toolbar>
                    <Divider />
                    <List
                      sx={{ width: '100%', maxWidth: 360, bgcolor: '#4CAF50',  }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <ListSubheader  component="div" id="nested-list-subheader" style={{backgroundColor: "#4CAF50", color: "white"}} sx={{ fontSize: "18px" }}>
                          General
                        </ListSubheader>
                      }
                    >
                      <ListItemButton onClick={()=>history.push("/home_admin")}>
                        <ListItemIcon>
                          <HomeIcon style={{ color: "white" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>history.push("/admin_clientes")}>
                        <ListItemIcon>
                          <PeopleOutlineIcon style={{ color: "white" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Clientes" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>history.push("/home")}>
                        <ListItemIcon>
                          <BalanceIcon style={{ color: "white" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Ingresar Pesaje" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>history.push("/home")}>
                        <ListItemIcon>
                          <WorkOutlineIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Generar Reporte" />
                      </ListItemButton>
                      <ListItemButton onClick={()=>history.push("/home")}>
                        <ListItemIcon>
                          <CalendarTodayIcon style={{ color: "white" }}/>
                        </ListItemIcon>
                        <ListItemText primary="Horarios" />
                      </ListItemButton>
                    
                    </List>
                    {/* <List style={{ marginTop: `auto` }} >
                      <Toolbar style={{backgroundColor: "#388E3C"}}>
                        <MenuIcon sx={{ mr: 3 }}/>
                        <Typography variant="h6" noWrap component="div">
                                foto admin
                        </Typography>
                      </Toolbar>
                    </List>
                  est de aca es un fotter para el drawer */}
                    
      </Drawer>
      
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            mx={5}
            mt={2}
        >
            <Toolbar  />
            <h1>Total Reciclado</h1>
            <ChartBar />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper elevation={3}
                        sx={{
                        height: 130,
                        }}>
                            <br></br>
                            <h1>kilos totales(kg)</h1>
                            <TextField
                            disabled
                            
                            label=""
                            defaultValue="Total Reciclado"
                            variant="standard"
                            />
                        </Paper>              
                </Grid>
                <Grid item xs={8}>
                    <BasicTable />    
                </Grid>
            </Grid>
        </Box>
    </Box>
    
  );
}
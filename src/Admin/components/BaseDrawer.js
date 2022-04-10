import React from 'react'
import { Box,Drawer,CssBaseline,AppBar,Toolbar,Typography,Divider,Avatar,ListSubheader,List,ListItemButton,ListItemIcon,ListItemText, } from '@mui/material';
import Logout from '../../sharedComponent/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BalanceIcon from '@mui/icons-material/Balance';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import logo from '../../Assets/img/logo.png'
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const drawerWidth = 200;
const NombreUsuario = " " /* poner el nombre del usuario q entrege el backend */

export default function BaseDrawer(props) { 
  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });          
  const toggleDrawer = (left, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [left]: open });
  };
  let navigate = useNavigate();
  const goNavigate = (route) => {
    navigate(route);
  }
  const list = (left) => (
    <Box
      sx={{ width: left === 'top' || left === 'bottom' ? 'auto' : drawerWidth }}
      role="presentation"    
    >
      <Toolbar 
        style={{backgroundColor: "#388E3C"}}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            {['left'].map((left) => (
              <React.Fragment >
                <MenuIcon onClick={toggleDrawer(left, false)} />               
              </React.Fragment>
            ))}
          </IconButton>
          <img src={logo} width={"40px"} alt="Reciclick"/>
          <Typography 
          variant="h7" 
          noWrap component="div" 
          paddingLeft={"2px"}
          >
            Reciclick
          </Typography>
        </Toolbar>
        <Divider />
      <List
      sx={{ width: '100%', maxWidth: '100%', bgcolor: '#4CAF50',  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader  component="div" id="nested-list-subheader" style={{backgroundColor: "#4CAF50", color: "white"}} sx={{ fontSize: "18px",mt:1.3 }}>
         
          <ListItemText primary="General" />
        </ListSubheader>
      }
      >
          <ListItemButton onClick={()=>goNavigate("/admin/home")}>
            <ListItemIcon>
              <HomeOutlinedIcon style={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton onClick={()=>goNavigate("/admin/client")}>
            <ListItemIcon>
              <PeopleOutlineIcon style={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </ListItemButton>
          <ListItemButton onClick={()=>goNavigate("/operador/home")}>
            <ListItemIcon>
              <LocalShippingOutlinedIcon style={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Operador" />
          </ListItemButton>
          <ListItemButton onClick={()=>goNavigate("/admin/home")}>
            <ListItemIcon>
              <BalanceIcon style={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Ingresar Pesaje" />
          </ListItemButton>
          <ListItemButton onClick={()=>goNavigate("/admin/home")}>
            <ListItemIcon>
              <WorkOutlineIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Generar Reporte" />
          </ListItemButton>
          <ListItemButton onClick={()=>goNavigate("/admin/home")}>
            <ListItemIcon>
              <CalendarTodayIcon style={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Horarios" />
          </ListItemButton>     
        </List>      
    </Box>
  );
  return (            
    <Box sx={{ display: 'flex' }}>                
      <CssBaseline />      
      <AppBar
      style={{backgroundColor: "white"}}
      position="fixed"
      sx={{ width: `calc(100%) `, ml: `${drawerWidth}px` }}

      >             
        <Toolbar style={{display:'flex', justifyContent:'flex-end'}}>
          {/*<Avatar {...stringAvatar(NombreUsuario)} /> */}
          <Avatar sx={{ bgcolor: "#4CAF50" }} >
            <PersonIcon />
          </Avatar>
          &nbsp; &nbsp;
          <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            color="#4CAF50"
          >
           {NombreUsuario}
          </Typography>
          &nbsp; &nbsp;
          <Logout color="#F44336" />     
        </Toolbar>
      </AppBar>
      <AppBar
      style={{backgroundColor: "white"}}
      position="fixed"
      sx={{ width: drawerWidth, mr: `calc(100% - ${drawerWidth}px) ` }}
      

      >        
        <Toolbar 
        style={{backgroundColor: "#388E3C",}}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            {['left'].map((left) => (
              <React.Fragment >
                <MenuIcon onClick={toggleDrawer(left, true)} />               
                <Drawer                
                PaperProps={{
                  sx: {
                  backgroundColor: "#4CAF50",
                  color: "white",                  
                  }
                }}
                left={left}
                open={state[left]}
                onClose={toggleDrawer(left, false)}
                >
                  {list(left)}
                </Drawer>
              </React.Fragment>
            ))}
          </IconButton>
          <img src={logo} width={"40px"} alt="Reciclick"/>
          <Typography 
          variant="h7" 
          noWrap component="div" 
          paddingLeft={"2px"}
          >
            Reciclick
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, height: '95vh' }}
      
      mt={2}
      >
        {props.children}
      </Box>
    </Box> 
  );
}
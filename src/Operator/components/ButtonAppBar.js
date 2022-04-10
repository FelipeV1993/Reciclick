import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenuMobile from './BasicMenuMobile';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HomeIcon from '@mui/icons-material/Home';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import Logout from '../../sharedComponent/Logout';

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
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
      sx={{ width: left === 'top' || left === 'bottom' ? 'auto' : 250 }}
      role="presentation"    
    >
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#4CAF50',  }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader  component="div" id="nested-list-subheader" style={{backgroundColor: "#4CAF50", color: "white"}} sx={{ fontSize: "18px",mt:1.3 }}>
          <ListItemIcon>
            <MenuIcon style={{ color: "white" }} onClick={toggleDrawer(left, false)} onKeyDown={toggleDrawer(left, false)}/>
          </ListItemIcon>
          <ListItemText primary="General" />
        </ListSubheader>
      }
      >
        <ListItemButton onClick={()=>goNavigate("/operador/home")}>
          <ListItemIcon>
            <PeopleAltOutlinedIcon style={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItemButton>
        <ListItemButton onClick={()=>goNavigate("/operador/pesaje")}>
          <ListItemIcon>
            <FactCheckOutlinedIcon style={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Ingresar Pesaje" />
        </ListItemButton>
        <ListItemButton onClick={()=>goNavigate("/operador/horario")}>
          <ListItemIcon>
            <ScheduleOutlinedIcon style={{ color: "white" }}/>
          </ListItemIcon>
          <ListItemText primary="Horarios" />
        </ListItemButton>                               
      </List>      
    </Box>
  );
  return (    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static"
      style={{backgroundColor: "#4CAF50"}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
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
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
          >
            Reciclick
          </Typography>
          <Logout color="white" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
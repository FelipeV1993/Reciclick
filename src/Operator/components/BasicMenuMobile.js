import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CancelIcon from '@mui/icons-material/Cancel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function BasicMenuMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton 
      color="success" 
      aria-label="add to shopping cart" 
      id="basic-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "white" }}/>
      </IconButton>     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><AccountBoxIcon color="success"/> perfil</MenuItem>
        <MenuItem onClick={handleClose}><HelpOutlineIcon color="success" /> sobre nosotros</MenuItem>
        <MenuItem onClick={handleClose}><CancelIcon color='error'/> cerrar sesion</MenuItem>
      </Menu>
    </div>
  );
}
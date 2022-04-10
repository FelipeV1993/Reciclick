
import React, {useState} from 'react';

import IconButton from '@mui/material/IconButton';

import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import Button from '@mui/material/Button';
import Cookies from 'universal-cookie';

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';

const cookies = new Cookies();
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Logout(props) {
  
  const [modalAlert, setModalAlert] = useState(false);
  const [message, setMessage] = useState("false");  

  const logout = () => {
    cookies.remove("token",{domain: "localhost", path:"/",});
    window.location.href="http://localhost:3000";
  };
  const abrirModalAlerta=(message)=>{
    setMessage(message)
    setModalAlert(true);

  }

  return (
    
    <div>
      <IconButton 
      size="small"
      onClick={()=>abrirModalAlerta("¿Esta seguro que desea cerrar sesión?")}
      >
        <PowerSettingsNewOutlinedIcon
        style={{ color: props.color }} />

      </IconButton>
      <div>
    <Grid item xs={12}> 
        <Box sx={{ display: 'flex' }}>
            <Modal open={modalAlert}>
                <Box sx={style2}>
                    <Grid container 
                    spacing={2} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center" 
                    >
                        <Grid item xs={4}
                        justifyContent="center"
                        alignItems="center" >
                            <Typography 
                            align='center' 
                            marginRight="20"
                            > 
                                {message}
                            </Typography>  
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                              
                            style={{ backgroundColor: "#4CAF50", color: "white" }}
                            variant="contained" 
                            onClick={()=>logout()}              
                            >
                            
                                SI
                            </Button>
                            &nbsp;&nbsp;
                    <Button 
                    color="error"
                    variant="contained" 
                    onClick={()=> {setModalAlert(false); }
                      }              
                    >
                      Cancelar
                    </Button>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Modal>             
        </Box>
    </Grid>
</div>
    </div>
    
  );
}
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import { Grid, TextField,} from '@mui/material';
import Modal from '@mui/material/Modal';


const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function AlertModal() {

  const [modalAlert, setModalAlert] = useState(false);
  const [message, setMessage] = useState("false");  

  const abrirModalAlerta=(message)=>{
    setMessage(message)
    setModalAlert(true);

  }
    
  
  return (
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
                <Grid item xs={4}>
                  {message}
                </Grid>
                <Grid item xs={4}>
                  <Button 
                  style={{ backgroundColor: "#4CAF50", color: "white" }}
                  variant="contained" 
                  onClick={()=>setModalAlert(false)}              
                  >
                    Ok
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>             
        </Box>
      </Grid>
    </div>
  );
}
// campos obligatorios email password empresa por mientras city
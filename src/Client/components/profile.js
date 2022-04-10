import React, { Component } from 'react'
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

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

export default class Profile extends Component {
  render() {
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
            <Box sx={{backgroundColor: 'white'}} >
              <Grid 
              container sx={{ color: 'text.primary',backgroundColor: 'white',borderTopLeftRadius: '15px',borderTopRightRadius: '15px', }}                 
              direction="row" 
              alignItems="center"
              >
                <Grid item xs={12} sx={{  }}>
                  <Typography 
                  variant="h1" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "28px",flexGrow: 1, backgroundColor: '#4CAF50', borderTopLeftRadius: '15px',borderTopRightRadius: '15px',}}
                  style={{ color: "white" }} 
                  align="center"
                  >
                    Perfil
                  </Typography>
                </Grid>
                <Grid 
                item xs={12} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "center", display: "flex" }} 
                p={2}
                >
                  <Avatar {...stringAvatar(NombreUsuario)} sx={{width: 70,height: 70, fontSize: '50px',}}/> 
                </Grid>
                <Grid 
                item xs={12} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "center", display: "flex" }} 
                p={1}
                >
                  <Typography 
                  variant="h3" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "22px",flexGrow: 1, }} 
                  align="center"
                  >
                    Mun. Iquique
                  </Typography>              
                </Grid>
                <Grid 
                item xs={12} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "center", display: "flex" }} 
                p={2}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "20px",flexGrow: 1, }} 
                  align="center"
                  >
                    "an example quote can go here"
                  </Typography>              
                </Grid>
                <Grid 
                item xs={3} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1, mx:1 }} 
                  align="left" 
                  >
                    Correo:
                  </Typography>                  
                </Grid>
                <Grid 
                item xs={9} 
                container wrap="nowrap" 
                sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1, }} 
                  align="left"
                  >
                    "an example quote can go here"
                  </Typography>                  
                </Grid>
                <Grid 
                item xs={3} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1,mx:1 }} 
                  align="left"
                  >
                    R.Social:
                  </Typography>                  
                </Grid>
                <Grid 
                item xs={9} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1, }} 
                  align="left">
                    "an example quote can go here sadasda"
                  </Typography>                  
                </Grid>
                <Grid 
                item xs={3} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1, mx:1 }} 
                  align="left"
                  >
                    Rut:
                  </Typography>                  
                </Grid>
                <Grid 
                item xs={9} 
                container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                style={{ justifyContent: "left", display: "flex" }} 
                p={0}
                >
                  <Typography 
                  variant="body2" 
                  noWrap 
                  component="div" 
                  sx={{ fontSize: "16px",flexGrow: 1, }} 
                  align="left">
                    "an example quote can go here"
                  </Typography>                 
                </Grid>                        
              </Grid>         
            </Box>
          </Paper>
        </Box>
      </div>
    )          
  }
}

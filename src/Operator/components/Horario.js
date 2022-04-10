import React, { Component } from 'react'
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

var photoLink ="https://ecoengranaje-1.s3.amazonaws.com/horario.pdf"

export default class Horario extends Component {
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
                                sx={{ fontSize: "28px",flexGrow: 1, backgroundColor: '#219653', borderTopLeftRadius: '15px',borderTopRightRadius: '15px',}}
                                style={{ color: "white" }} 
                                align="center"
                                >
                                    Horario
                                </Typography>
                            </Grid>
                            <Grid 
                            item xs={12} 
                            container sx={{ color: 'text.primary',backgroundColor: 'white',}}  
                            style={{ justifyContent: "center", display: "flex" }} 
                            p={2}
                            alignItems="stretch"
                            >
                                {<iframe 
                                src= {photoLink}
                                width="100%" 
                                height="350px"></iframe>}
                            </Grid>                       
                        </Grid>         
                    </Box>
                </Paper>
            </Box>
        </div>
    )          
  }
}

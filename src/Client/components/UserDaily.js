import React, { useState } from 'react'
import { Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
/* import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'; */

function UserDaily (){
    const [date, setDate] = useState(new Date());
    const onChange = date =>{
        setDate(date)
    }
    return(              
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
            height: 300,
            borderRadius: '16px',
            backgroundColor: 'white'
            },
            }}
            mt={2}
            >
                <Paper elevation={4}  >
                    <Box  >
                        <Grid 
                        container sx={{ color: 'text.primary',borderTopLeftRadius: '15px',borderTopRightRadius: '15px', }}                 
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
                                    Resultados Diarios
                                </Typography>
                            </Grid>
                            <Grid 
                            item xs={12} 
                            container sx={{ color: 'text.primary',}}  
                            style={{ justifyContent: "center", display: "flex" }} 
                            alignItems="stretch"
                            >
                                <div>
                                    <Calendar onChange={onChange} value={date} />
                                    {date.toString()}
                                </div>
                            </Grid>                       
                        </Grid>         
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default UserDaily;

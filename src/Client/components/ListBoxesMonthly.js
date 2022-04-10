
import React, { Component } from 'react';
import {Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import BalanceIcon from '@mui/icons-material/Balance';
import Co2Icon from '@mui/icons-material/Co2';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LandscapeIcon from '@mui/icons-material/Landscape';

const box = "numero kilos"
const box0 = `${box} (Kg)`
const box1 = "numero arboles"
const box2 = "numero agua"
const box3 = "numero terreno"
const box4 = "numero emisiones"
const box5 = "numero petroleo"

export default class ListBoxesMonthly extends Component {
    render() { 
        return (
            <div>
                <Box 
                value={box1}
                sx={{       
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#00897b',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap 
                        component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }} 
                        style={{ color: "white" }}
                        >
                        {box0} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <BalanceIcon  style={{ color: "white" }} />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }}>
                    Total Reciclado
                </Box>
                </Box>           
                <Box 
                value={box1}
                sx={{          
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#4CAF50',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }} 
                        style={{ color: "white" }}
                        >
                        {box1} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <LocalFloristIcon  style={{ color: "white" }} />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }}>
                    Arboles salvados
                </Box>
                </Box>
                <Box 
                sx={{
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#FF9800',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }} 
                        style={{ color: "white" }}
                        >
                        {box4} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Co2Icon  style={{ color: "white" }} />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }}>
                    Emisiones menos
                </Box>
                </Box>
                <Box 
                sx={{
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#2196F3',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }} 
                        style={{ color: "white" }}
                        >
                        {box2} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <FormatColorResetIcon  style={{ color: "white" }} />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }} >
                    Litros no ocupados
                </Box>
                </Box>
                <Box 
                sx={{
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#3F51B5',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap 
                        component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }}
                        style={{ color: "white" }}
                        >
                        {box5} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <LocalGasStationIcon  style={{ color: "white" }} />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }}>
                    Petroleo no ocupado
                </Box>
                </Box>
                <Box 
                sx={{
                p: 2,
                width: 330,
                height: 130,
                backgroundColor: '#6F6F6F',
                borderRadius: '16px',
                }}
                mx={5}
                my={1}
                >
                <Box >
                    <Grid container sx={{ color: 'text.primary' }}>
                    <Grid item xs={11}>
                        <Typography 
                        variant="h6" 
                        noWrap 
                        component="div" 
                        sx={{ fontSize: "28px",flexGrow: 1 }} 
                        style={{ color: "white" }}
                        >
                        {box3} 
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <LandscapeIcon style={{ color: "white" }}  />
                    </Grid>
                    </Grid>
                </Box>
                <Box style={{ color: "white" }}>
                    Metros de terreno
                </Box>
                </Box>
            </div>                
        );
    }
}

import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import logo from '../../Assets/img/logoColor.png'
import FormControl from '@mui/material/FormControl';
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
const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        }
    }
})
/* const baseUrl="http://143.244.160.42:3002/api/auth/login"; */
const baseUrl="http://localhost:3002/api/auth/login"
const cookies = new Cookies();
const emailPasswordError = "El correo electrónico o la contraseña no es correcto, intente nuevamente"
export default function AlertModal() {

    const [modalAlert, setModalAlert] = useState(false);
    const [message, setMessage] = useState("false");  
    const [body, setBody] = useState({ username: '', password: '' })


  
        const abrirModalAlerta=(message)=>{
          setMessage(message)
          setModalAlert(true);
      
        }
    
        const handleChange = e => {
            setBody({
                ...body,
                [e.target.name]: e.target.value
            })
        } 
        
        const iniciarSesion=async()=>{
            await axios({
                method: 'POST',
                url: baseUrl,
                data:{
                    email: body.username,
                    password: body.password
                }
            })
            .then(response=>{
                return response.data;
            })
            .then(response=>{ 
                    console.log(response)
                    cookies.set("token", response.token);
                    cookies.set("email", response.email);
                    window.location.href="./admin/home";
                    
               
            })
            .catch(error=>{
                console.log(error.response);
                console.log(error);
                abrirModalAlerta(emailPasswordError)
            })
        }
    
        React.useEffect(()=>{
            if(cookies.get("token")){
                window.location.href="./admin/home";
            }
        },[])    

            const newLocal = "100px";
            return (
                <ThemeProvider theme={theme}>
                    <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    minWidth="100vw"
                    sx={{ 
                    maxHeight: 'sm',
                    maxWidth: 'sm'}}
                    >                   
                        <Paper 
                        elevation={9}
                        style={{
                        paddingLeft:35,
                        paddingRight:35}}
                        >
                            <Grid align='center'>
                                <Box sx={{ mt: 4, mb: 3 }}>
                                    <img src={logo} width={newLocal} alt="Reciclick" />
                                </Box>
                                <h3>Bienvenido a Reciclick</h3>
                                
                                <Box sx={{ mt: 2, mb: 2 }}>    
                                    <TextField
                                    className="form-control"
                                    color='primary'
                                    type='email'
                                    autoFocus
                                    variant='outlined'
                                    label='correo electronico'
                                    placeholder='ejemplo@gmail.com'
                                    value={body.username}
                                    name="username"
                                    onChange={handleChange} 
                                    />
                                </Box>
                                <Box sx={{ mt: 2, mb: 2 }}>  
                                    <TextField
                                    className="form-control"
                                    type='password'
                                    variant='outlined'
                                    label='contraseña'
                                    placeholder='Ingrese su contraseña'
                                    name="password"
                                    value={body.password}
                                    onChange={handleChange}
                                    />
                                </Box>
                                
                                <Box sx={{ mt: 2, mb: 2 }}>
                                    <FormControlLabel
                                    control={
                                        <Checkbox 
                                        name="checkedB"
                                        color="primary"
                                        />
                                    }
                                    label="Recuerdame"
                                    />
                                </Box>                            
                                <Box  sx={{ mt: 2, mb: 4 }}>
                                    <Button style={{ color: "white"}}
                                    size='large'
                                    type='submit' 
                                    color='primary' 
                                    variant="contained" 
                                    onClick={()=>iniciarSesion()}
                                    >
                                        Iniciar Sesion
                                    </Button>
                                </Box>
                                <Box sx={{ mt: 2, mb: 0.5 }}>
                                    <Typography align='center'>
                                        <Link href="#" >
                                            Olvidaste tu contraseña?
                                        </Link>
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 0.5, mb: 4 }}>
                                    <Typography 
                                    align='center' 
                                    marginRight="20"
                                    > 
                                    No tienes cuenta?&nbsp;
                                        <Link href="#" >
                                            Crea una
                                        </Link>
                                    </Typography>
                                </Box>                    
                            </Grid>
                        </Paper> 
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
                    </Box>
                </ThemeProvider>
                
            )
        
    }



/* <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div> */
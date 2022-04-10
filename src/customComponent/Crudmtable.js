import MaterialTable from 'material-table';
import React, {useState,useEffect} from 'react'
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { FormatAlignCenter } from '@mui/icons-material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} label={'busqueda'} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const baseUrl=""



export default function Crud()  {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const[data,setData]= useState([])
  const peticionGet =async()=>{
    await axios.get(baseUrl)
    .then(response=>(
      setData(response.data)
    ))
  }
  useEffect(()=>{
    peticionGet();
  }, [])
  const columnas =[
    {
      title:'Nombres',
      field:'nombreEmpresa',
      align: "center"
    },
    {
      title:'Producto',
      field:'producto',
      align: "center",
    },
    {
      title:'Ultimo Pesaje',
      field: 'pesaje',
      align: "center",
      type: "numeric"
    },
    {
      title:'Pesaje Total',
      field:'total',
      align: "center",
      type: "numeric",
    },
    
  ];

  const marca=[
    {
      title:'Nombres',
      field:'nombre',
      align: "center"
    },
    {
      title:'Apellido',
      field:'apellido',
      align: "center"
    },
    {
      title:'Email',
      field:'email',
      align: "center"
    },
    {
      title:'Ciudad',
      field:'ciudad',
      align: "center"
    },
    {
      title:'Provincia',
      field:'provincia',
      align: "center"
    },
    {
      title:'Rut',
      field:'rut',
      align: "center",
      type: "numeric",
    },
  ]
  const dato=[ /* remplazar dato por data para pruebas */
    {nombreEmpresa:'Mun. iquique',producto:['metales ', 'vidrios'],pesaje: 6,total: 30,nombre:'mario',apellido:'rodriguez',email:'toychato@matenme.cl',ciudad:'iquique',provincia:'iquique',rut:123124124,},
    {nombreEmpresa:'Mun. copiapo',producto:['vidrio'],pesaje: 9,total: 60,nombre:'mario2',apellido:'rodriguez2'},
    {nombreEmpresa:'Mun. antofagasta',producto:['carton'],pesaje: 16,total: 70,nombre:'mario3',apellido:'rodriguez3'},
    {nombreEmpresa:'Mun. villa alemana',producto:['metales'],pesaje: 3.7,total: 20,nombre:'mario4',apellido:'rodriguez4'},
    {nombreEmpresa:'Mun. quilpue',producto:['plastico'],pesaje: 16,total: 50,nombre:'mario5',apellido:'rodriguez5'},
    
  ]

  

    return (
      
      <div>
        <Button >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
        <MaterialTable 
        localization={{
          body: {
            emptyDataSourceMessage: 'Ningun cliente ingresado por el momento, porfavor agrege un cliente'
          },
          pagination: {
            labelRowsSelect: 'lineas',
            labelDisplayedRows: '{count} de {from}-{to}',
            firstTooltip: 'Primera pagina',
            previousTooltip: 'Pagina anterior',
            nextTooltip: 'Proxima pagina',
            lastTooltip: 'Última pagina'
        },
          toolbar: {
           searchTooltip: 'Buscar',
           searchPlaceholder: 'Busqueda',
          }         
        }}
        
        icons={tableIcons}
        columns={columnas}
        data={data}
        title={''}
        actions={[
          {
            icon: () => <Edit />,
            tooltip:'Editar cliente',
            onClick: (event,rowData)=>alert('has presionado editar al cliente: '+rowData.nombre)
          },
          {
            icon: () => <DeleteOutline />,
            tooltip:'Eliminar cliente',
            onClick: (event,rowData)=>window.confirm('has presionado eliminar: '+rowData.nombre)
          }
        ]}
        
        options={{
          actionsColumnIndex: -1,
        }}

        detailPanel={rowData => {
          return (
            <div style={{ padding: '10px 50px 10px 50px' }}>
              <MaterialTable
              icons={tableIcons}
                columns={marca}
                data={[
                  {nombre:rowData.nombre,apellido:rowData.apellido,email:rowData.email,ciudad:rowData.ciudad,provincia:rowData.provincia,rut:rowData.rut,},
                
                ]}
                options={{
                  toolbar: false,
                  paging: false
                }}
                
              />
            </div>
          );
        }
        }
        
        />
        
      </div>
    )
}

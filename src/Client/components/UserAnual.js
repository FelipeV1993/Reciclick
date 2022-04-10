import React from 'react'
import Chart from 'react-apexcharts'
import { Grid, Paper } from '@mui/material';
import moment from 'moment'
import 'moment/locale/es' 
moment.locale('es')

let totalMeses=[4,3,2,1,0]
totalMeses=totalMeses.map(i=>(moment().subtract(i,'Y').format('YYYY')))
console.log(totalMeses)
// const hoy= moment()
/* tras pasar aca los datos del backend a estos arreglos */
const data={
  "cartonAnual":[620,150,290,600,232,],
  "plasticoAnual":[1200,50,790,102,431,],
  "metalAnual":[330,520,220,770,442,],
  "vidrioAnual":[320,520,710,300,232,],
  "tetraAnual":[470,755,671,230,423,],
  "liquidosAnual":[232,525,571,830,623,],
  "electronicosAnual":[632,952,971,430,123,],
  "organicosAnual":[432,532,471,630,323,],
}
function UserAnual (){
  return(              
    <Grid container spacing={2}>
      <Grid 
      item xs={12}
      mx={2}
      mt={2}>
        <Paper 
        elevation={3}
        sx={{
        height: '100%',
        }}
        >
          <h1>Resultados Anuales</h1>
          <Chart
          type="bar"
          width={'100%'}
          height={'200%'}
          series={[
            {
              name: 'Cartones',
              data:data["cartonAnual"],
              color: '#FF9800'
            },
            {
              name: 'Plásticos',
              data:data["plasticoAnual"],
              color: '#4CAF50'
            },
            {
              name: 'Metales',
              data:data["metalAnual"],
              color: '#BDBDBD'
            },
            {
              name: 'Vidrios',
              data:data["vidrioAnual"],
              color: '#2196F3'
            },
            {
              name: 'Tetra',
              data:data["tetraAnual"],
              color: '#f9db66'
            },
            {
              name: 'RESPEL',
              data:data["liquidosAnual"],
              color: '#f2001d'
            },
            {
              name: 'Electrónicos',
              data:data["electronicosAnual"],
              color: '#6f1748'
            },
            {
              name: 'Orgánicos',
              data:data["organicosAnual"],
              color: '#7d3c11'
            }
          ]}
          options={{
            xaxis: {
              tickPlacement: 'on',
              categories: totalMeses,
              labels: {
                events: {
                  click: function () {                     
                    alert(this.xAxis[0].tickPositions.length);		
                      // alert(this.x)                            
                  }
                }
              },
            },
            chart:{
              stacked:true, 
              events: { // Agrega el evento de clic de los datos del histograma
                dataPointSelection: function (event, chartContext, config) {
                  /* console.log(event);
                  console.log(chartContext);
                  console.log(config); */
                  alert(config.w.config.labels[config.seriesIndex] + " " +
                  config.w.config.series[config.seriesIndex].name + " " +
                  config.w.config.series[config.seriesIndex].data[config.dataPointIndex]);
                }
              }
            },
            plotOptions: {
              bar: {
                  dataLabels: {
                    hideOverflowingLabels: false
                  }
              }
            },            
            yaxis: {
                title: {
                  text: 'Kilos reciclados por mes'
                }
              },
          }}   
          >
          </Chart>                          
        </Paper>              
      </Grid>
    </Grid>
   
       
  )
}

export default UserAnual;
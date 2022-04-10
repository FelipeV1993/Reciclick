import React from 'react'
import Chart from 'react-apexcharts'
import moment from 'moment'
import 'moment/locale/es' 
import Toolbar from '@mui/material/Toolbar';
moment.locale('es')

let totalMeses=[12,11,10,9,8,7,6,5,4,3,2,1,0]
totalMeses=totalMeses.map(i=>(moment().subtract(i,'M').format('MMMM')))
console.log(totalMeses)
// const hoy= moment()
/* tras pasar aca los datos del backend a estos arreglos */
const data={
  "cartonMes":[62,15,29,60,23,60,38,21,46,63,73,18,50],
  "plasticoMes":[12,5,79,10,43,70,77,33,10,20,33,70,50],
  "metalMes":[33,52,22,77,44,25,11,37,49,29,66,42,50],
  "vidrioMes":[32,52,71,30,23,60,47,23,15,40,23,60,50],
  "tetraMes":[32,52,71,30,23,60,47,23,15,40,23,60,50],
  "liquidosMes":[32,52,71,30,23,60,47,23,15,40,23,60,50],
  "electronicosMes":[32,52,71,30,23,60,47,23,15,40,23,60,50],
  "organiscoMes":[32,52,71,30,23,60,47,23,15,40,23,60,50],
}
function ChartBar (){
  return(
    <div>
      <Toolbar  />
      <h1>Total Reciclado</h1>
      <Chart
      type="bar"
      width={'100%'}
      height={'100%'}
      series={[
        {
          name: 'Cartones',
          data:data["cartonMes"],
          color: '#3b5196'
        },
        {
          name: 'Plásticos',
          data:data["plasticoMes"],
          color: '#e6e900'
        },
        {
          name: 'Metales',
          data:data["metalMes"],
          color: '#a5a5a5'
        },
        {
          name: 'Vidrios',
          data:data["vidrioMes"],
          color: '#74af44'
        },
        {
          name: 'Tetra',
          data:data["tetraMes"],
          color: '#f9db66'
        },
        {
          name: 'RESPEL',
          data:data["liquidosMes"],
          color: '#f2001d'
        },
        {
          name: 'Electrónicos',
          data:data["electronicosMes"],
          color: '#6f1748'
        },
        {
          name: 'Orgánicos',
          data:data["organiscoMes"],
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
                alert(this.xAxis[0].tickPositions.length);// alert(this.x)                                   
              }
            }
          },
        },
        chart:{
          stacked:true, 
          events: { // Agrega el evento de clic de los datos del histograma
            dataPointSelection: function (event, chartContext, config) {
              alert(config.w.config.series[config.seriesIndex].name + " " + config.w.config.series[config.seriesIndex].data[config.dataPointIndex]);
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
    </div>
  )
}
export default ChartBar;
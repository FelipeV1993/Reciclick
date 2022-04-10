import React from 'react'
import Chart from 'react-apexcharts'

const plastico= 100
const vidrio= 150
const metales= 222
const carton= 111
const Tetra= 500
const RePeligrosos=55
const Electronicos= 342
const Organicos= 73

function ChartPie (){
  return(
    <Chart
    type="pie"
    width={'100%'}
    height={'100%'}
    series={[plastico,vidrio,metales,carton,Tetra,RePeligrosos,Electronicos,Organicos]}    
    options={{
      colors: ['#e6e900','#74af44', '#a5a5a5', '#3b5196', '#f9db66', '#f2001d', '#6f1748', '#7d3c11'],
          legend: {
            position: 'bottom'
          },
      plotOptions: {
        bar: {
            dataLabels: {
              hideOverflowingLabels: false
            }
        }
      },  
      labels: ['Plástico', 'Vidrio', 'Metales', 'Cartón', 'Tetra', 'RePeligrosos', 'Electrónicos', 'Orgánicos'],
      
    }}
    >
    </Chart>
  )
}
export default ChartPie;
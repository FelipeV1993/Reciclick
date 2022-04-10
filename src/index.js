import React from 'react';
import ReactDOm from 'react-dom';
import App from './App';



const divRoot =document.querySelector('#app');//div root es la referemcia a la que se llega por la id de queri selector
ReactDOm.render(<App />,divRoot);//.render, renderiza o muestra esto tiene 2 argumentos, lo que queremos mostrar seguido de donde lo queremos mostrar, en este caso divroot nos lleva al index.html en la carpeta public gracias a queryselector y lo encuentra por la id en div id



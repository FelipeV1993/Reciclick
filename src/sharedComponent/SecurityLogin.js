import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function SecurityLogin (){
    const token = cookies.get("token")
    const securityLogin =(token)=>{
        if(token){console.log("te logeaste bien tienes permitido seguir")}
        else{window.location.href="http://localhost:3000";}
      }
      React.useEffect(()=>{
          securityLogin(token)
        },[])  
  
}              

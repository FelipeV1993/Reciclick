import React, { Component } from 'react'
import BaseDrawer from '../components/BaseDrawer'
import { Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function AdminBase () {
    const token = cookies.get("token")
    const securityLogin =(token)=>{
        if(token){console.log("te logeaste bien tienes permitido seguir")}
        else{window.location.href="http://localhost:3000";}
      }
      React.useEffect(()=>{
        securityLogin(token)
      },[])   
        return (    

                
            
            <div>
                <BaseDrawer>
                    
                    <Outlet />  
                    
                </BaseDrawer>                     
            </div>      
        )            
    
}

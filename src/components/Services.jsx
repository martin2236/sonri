import React from 'react'
import Box from '@mui/material/Box';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

export const Services = () => {
  return (
    <Box sx={{
        marginTop:5,
        backgroundColor:'#FFF',
        minHeight:'90vh'
    }}>
        <h1 style={{marginLeft:10}}>Nuestros servicios</h1>
       <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:5, justifyContent:'space-around'}}>
        <Box sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <div style={{position:'relative',left:-25,top:50,width:60,height:60,backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <ScreenSearchDesktopIcon sx={{color:'white'}} fontSize={'large'}/>
                </div>
                <Box sx={{width:'90%'}}>
                    <h1>Monitoreo de TI</h1>
                    <p>Supervise su infraestructura de red, servidores físicos y virtuales y otros equipos. Generando información para ayudar a tu equipo en la continuidad de tu negocio.</p>
                </Box>
            </Box>

            <Box sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <div style={{position:'relative',left:-25,top:50,width:60,height:60,backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <EngineeringIcon sx={{color:'white'}} fontSize={'large'}/>
                </div>
                <Box sx={{width:'90%'}}>
                    <h1>Monitoreo de ISP</h1>
                    <p>Monitoree la disponibilidad de toda la topología de su ISP y equipos a través de soluciones de mapas, tenga un "Health Check" en tiempo real.</p>
                </Box>
            </Box>

            <Box sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <div style={{position:'relative',left:-25,top:50,width:60,height:60,backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <FactoryIcon sx={{color:'white'}} fontSize={'large'}/>
                </div>
                <Box sx={{width:'90%'}}>
                    <h1>Monitoremos su empresa</h1>
                    <p>Fácil diagnóstico de problemas con indicadores en tiempo real de equipos e infraestructura industrial, brindando información precisa para que cada nivel de operación pueda actuar de manera más eficiente.</p>
                </Box>
            </Box>

            <Box sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <div style={{position:'relative',left:-25,top:50,width:60,height:60,backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <MonitorHeartIcon  sx={{color:'white'}} fontSize={'large'}/>
                </div>
                <Box sx={{width:'90%'}}>
                    <h1>Monitoreando tu negocio</h1>
                    <p>Cree indicadores de rendimiento para su ERP, CRM u otros sistemas, para que tenga una gestión de operaciones en tiempo real, respaldado por alertas y recomendaciones directamente.</p>
                </Box>
            </Box>
       </Box>
    </Box>
  )
}

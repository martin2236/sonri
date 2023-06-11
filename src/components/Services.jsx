import React,{useRef} from 'react'
import Box from '@mui/material/Box';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion, useScroll } from "framer-motion";

const theme = createTheme();

theme.typography.body1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.0rem',
  },
};

theme.typography.h5 = {
    fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.8rem',
  },
}

export const Services = ({services}) => {
    const { scrollYProgress } = useScroll();
  return (
    <ThemeProvider theme={theme}>
        <Box 
        ref={services}
        sx={{
        marginTop:5,
        backgroundColor:'#FFF',
        minHeight:'90vh'
        }}>
            <Typography variant='h4' sx={{marginLeft:2,mb:{xs:4,md:0,lg:5,xl:10}}}>Nuestros servicios</Typography>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:5, justifyContent:'space-around'}}>
        
            <Box
            component={motion.div}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                
                <Box sx={{width:'90%',py:2}}>
                    <Box sx={{position:'absolute',right:5,top:5,width:{xs:50,md:50,lg:50,xl:100},height:{xs:50,md:50,lg:50,xl:100},backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <ScreenSearchDesktopIcon sx={{color:'white',fontSize:{xs:'calc(1em + 3vw)',md:'calc(1em + 2vw)',lg:'calc(1em + 2vw)',xl:'calc(1em + 3vw)'}}}/>
                    </Box>
                    <Typography variant='h5' sx={{fontWeight:'bold', mb:2}}>Monitoreo de TI</Typography>
                    
                    <Typography variant='body1'sx={{mt:{lg:0,xl:4}}}>Supervise su infraestructura de red, servidores físicos y virtuales y otros equipos. Generando información para ayudar a tu equipo en la continuidad de tu negocio.</Typography>
                </Box>
            </Box>

            <Box
            component={motion.div}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <Box sx={{width:'90%',py:2}}>
                <Box sx={{position:'absolute',right:5,top:5,width:{xs:50,md:50,lg:50,xl:100},height:{xs:50,md:50,lg:50,xl:100},backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <EngineeringIcon sx={{color:'white',fontSize:{xs:'calc(1em + 3vw)',md:'calc(1em + 2vw)',lg:'calc(1em + 2vw)',xl:'calc(1em + 3vw)'}}}/>
                    </Box>
                    <Typography variant='h5' sx={{fontWeight:'bold', mb:2}}>Monitoreo de ISP</Typography>
                    <Typography variant='body1' sx={{mt:{lg:0,xl:4}}}>Monitoree la disponibilidad de toda la topología de su ISP y equipos a través de soluciones de mapas, tenga un "Health Check" en tiempo real.</Typography>
                </Box>
            </Box>

            {/*<Box
            component={motion.div}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                <Box sx={{position:'relative',left:{xs:-25,md:-25,lg:-40},top:{xs:60,md:50,lg:40,xl:80},width:{xs:50,md:50,lg:80,xl:100},height:{xs:50,md:50,lg:80,xl:100},backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <EngineeringIcon sx={{color:'white',fontSize:{xs:'calc(1em + 2vw)',md:'calc(1em + 2vw)',lg:'calc(1em + 3vw)',xl:'calc(1em + 4vw)'}}}/>
                </Box>
                <Box sx={{width:'90%',py:2}}>
                    <Typography variant='h5' sx={{fontWeight:'bold', mb:2}}>Monitoreo de ISP</Typography>
                    <Typography variant='body1'>Monitoree la disponibilidad de toda la topología de su ISP y equipos a través de soluciones de mapas, tenga un "Health Check" en tiempo real.</Typography>
                </Box>
            </Box>*/}

            <Box
            component={motion.div}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                
                <Box sx={{width:'90%',py:2}}>
                <Box sx={{position:'absolute',right:5,top:5,width:{xs:50,md:50,lg:50,xl:100},height:{xs:50,md:50,lg:50,xl:100},backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <FactoryIcon sx={{color:'white',fontSize:{xs:'calc(1em + 3vw)',md:'calc(1em + 2vw)',lg:'calc(1em + 2vw)',xl:'calc(1em + 3vw)'}}}/>
                </Box>
                    <Typography variant='h5' sx={{fontWeight:'bold', mb:2}}>Monitoremos su empresa</Typography>
                    <Typography variant='body1' sx={{mt:{lg:0,xl:4}}}>Fácil diagnóstico de problemas con indicadores en tiempo real de equipos e infraestructura industrial, brindando información precisa para que cada nivel de operación pueda actuar de manera más eficiente.</Typography>
                </Box>
            </Box>

            <Box
            component={motion.div}
            initial={{ x: '-100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            sx={{display:'flex',paddingRight:1,flexDirection:'row',justifyContent:'center',border:'1px solid #4f6cf4',width:{xs:'90%',md:'40%'}, borderRadius:5, marginLeft:{xs:2,md:5}}}>
                   
                    <Box sx={{width:'90%',py:2}}>
                    <Box sx={{position:'absolute',right:5,top:5,width:{xs:50,md:50,lg:50,xl:100},height:{xs:50,md:50,lg:50,xl:100},backgroundColor:'#4f6cf4', borderRadius:50, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <MonitorHeartIcon  sx={{color:'white',fontSize:{xs:'calc(1em + 3vw)',md:'calc(1em + 2vw)',lg:'calc(1em + 2vw)',xl:'calc(1em + 3vw)'}}}/>
                        </Box>
                        <Typography variant='h5' sx={{fontWeight:'bold', mb:2}}>Monitoreando tu negocio</Typography>
                        <Typography variant='body1' sx={{mt:{lg:0,xl:4}}}>Cree indicadores de rendimiento para su ERP, CRM u otros sistemas, para que tenga una gestión de operaciones en tiempo real, respaldado por alertas y recomendaciones directamente.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

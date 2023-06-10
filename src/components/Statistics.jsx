import React from 'react'
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import DnsIcon from '@mui/icons-material/Dns';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion, useScroll } from "framer-motion";
import fondo from '../assets/bg-newsletter.png'


const theme = createTheme();

theme.typography.body1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.6rem',
  },
};
theme.typography.body2 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1.4rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.9rem',
      },
  };

export const Statistics = () => {
    const { scrollYProgress } = useScroll();
  return (
    <ThemeProvider theme={theme}>
        <Box
        sx={{
            mt:5,
            minHeight:{xs:'40vh',md:'20vh'},
            width:'100%',
            display:'flex',
            flexDirection:{xs:'column',md:'row'},
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'#4f6cf4',
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    >
        <Box 
         component={motion.div}
         initial={{ opacity: 0, x: -100 }}
         animate={{
             opacity: scrollYProgress >= 300 ? 1 : 0,
             y: scrollYProgress >= 300 ? 50 : 0,
           }}
         transition={{ duration: 0.5, delay: 0.5 }}
         whileInView={{ opacity: 1, x: 0 }}
        style={{ width:{xs:'80%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <WarningIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:250,md:'inherit'}, display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <Typography variant='body1' sx={{color:'#fff'}}>+ 1000 </Typography>
                <Typography variant='body2' sx={{color:'#fff'}}>Alertas gestionadas por mes</Typography>
            </Box>
        </Box>
        <Box 
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{
            opacity: scrollYProgress >= 300 ? 1 : 0,
            y: scrollYProgress >= 300 ? 50 : 0,
          }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ width:{xs:'80%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <DnsIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:250,md:'inherit'},display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <Typography variant='body1' style={{color:'#fff'}}>+ 3000 </Typography >
                <Typography variant='body2' style={{color:'#fff'}}>Host configurados con éxito</Typography >
            </Box>
        </Box>
        <Box 
        component={motion.div}
        initial={{ opacity: 0, x: -100 }}
        animate={{
            opacity: scrollYProgress >= 300 ? 1 : 0,
            y: scrollYProgress >= 300 ? 50 : 0,
          }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        style={{ width:{xs:'0%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <CodeOffSharpIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:250,md:'inherit'}, display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <Typography variant='body1' style={{color:'#fff'}}>+ 300 </Typography >
                <Typography variant='body2' style={{color:'#fff'}}> hs de soporte tecnico profesional</Typography >
            </Box>
        </Box>
    </Box>
    </ThemeProvider>
  )
}

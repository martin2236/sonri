import React,{useState} from 'react'
import Box from '@mui/material/Box';
import fondo from '../assets/backgroundFooter.png'
import MarkerIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';


const theme = createTheme();

theme.typography.body1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.0rem',
  },
};

theme.typography.h6 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.6rem',
    },
  };
  const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    justifyContent:'flex-start',
    '&:hover': {
        backgroundColor: '#FFF',
      },
    
  });

  

export const Footer = ({handleButtonClick}) => {
    const [active1,setActive1]= useState('#000')
    const [active2,setActive2]= useState('#000')
    const [active3,setActive3]= useState('#000')

    const openFacebook = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };
      const openInstagram = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };
      const openLinkedin = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };
      const openWhatsappChat = () => {
        const phoneNumber = '123456789'; // Número de teléfono al que deseas enviar el mensaje
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{
        height:'40vh',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        mb:{md:5}
        }}>
         
            <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column',md:'row'}}}>
                <Box
                component={motion.div}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                sx={{width:{xs:'100%',md:'33%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}}>
                    <Typography variant="h6" gutterBottom sx={{marginTop:{xs:5,md:5,lg:10,xl:15}, color:{xs:'black',xl:'black'}}}>
                        Info
                    </Typography>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:'100%'}}>
                        <MarkerIcon sx={{fontSize:{xl:40}}}/>
                        <Typography variant='body1' sx={{ml:2}}>Direccion: calle falsa 123</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:'100%'}}>
                        <PhoneIcon sx={{fontSize:{xl:40}}}/>
                        <Typography variant='body1' sx={{ml:2}}>Telefono: 0220-1234323</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:'100%'}}>
                        <EmailIcon sx={{fontSize:{xl:40}}}/>
                        <Typography variant='body1' sx={{ml:2}}>Email: gctecSolutions@gamil.com</Typography>
                    </Box>
                </Box>

                <Box 
                component={motion.div}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                sx={{width:{xs:'100%',md:'33%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}}>
                    <Typography variant="h6" gutterBottom sx={{marginTop:{xs:5,md:5,lg:10,xl:15}, color:{xs:'black',xl:'black'}}}>
                        Links utiles
                    </Typography>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:{xs:'100%',md:'60%'}}}>
                        <CustomButton onClick={(event)=>handleButtonClick(event,'Quienes somos')} onMouseEnter={()=> setActive1('#4f6cf4')} onMouseLeave={()=> setActive1('#000')} variant='text' sx={{m:0,p:0,fontWeight:400}}>
                            <Typography variant='body1' color={active1} >Sobre nosotros</Typography>
                        </CustomButton>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:{xs:'100%',md:'60%'}}}>
                        <CustomButton onClick={(event)=>handleButtonClick(event,'Que hacemos')} variant='text'onMouseEnter={()=> setActive2('#4f6cf4')} onMouseLeave={()=> setActive2('#000')} sx={{m:0,p:0,fontWeight:400}}>
                            <Typography variant='body1' color={active2}>Nuestros servicios</Typography>
                        </CustomButton>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:3, mt:2, width:{xs:'100%',md:'60%'}}}>
                    <CustomButton onClick={(event)=>handleButtonClick(event,'Blog')} variant='text'onMouseEnter={()=> setActive3('#4f6cf4')} onMouseLeave={()=> setActive3('#000')} sx={{m:0,p:0,fontWeight:400}}>
                        <Typography variant='body1' color={active3}>Posts</Typography>
                    </CustomButton>
                    </Box>
                </Box>

                <Box 
                component={motion.div}
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                sx={{width:{xs:'100%',md:'33%',mb:{xs:3,md:0}}}}>
                    <Typography variant="h6" gutterBottom sx={{textAlign:'center',marginTop:{xs:5,md:5,lg:10,xl:15}, color:{xs:'black',xl:'black'}}}>
                        Nuestras redes
                    </Typography>
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center',mt:5,mb:5}}>
                        <FacebookIcon sx={{color:{xs:'#4f6cf4',xl:'#4f6cf4'}, fontSize:{xl:50} }}/>
                        <InstagramIcon sx={{color:{xs:'#4f6cf4',xl:'#4f6cf4'}, fontSize:{xl:50}, ml:3}}/>
                        <LinkedInIcon sx={{color:{xs:'#4f6cf4',xl:'#4f6cf4'}, fontSize:{xl:50}, ml:3}}/>
                        <WhatsAppIcon sx={{color:{xs:'#4f6cf4',xl:'#4f6cf4'}, fontSize:{xl:50}, ml:3}}/>
                    </Box>
                </Box>
          </Box>
      </Box>
      </ThemeProvider>
  )
}

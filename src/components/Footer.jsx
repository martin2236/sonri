import React from 'react'
import Box from '@mui/material/Box';
import fondo from '../assets/backgroundFooter.png'
import MarkerIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Footer = () => {
  return (
      <Box sx={{
        height:'40vh',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        }}>
         
          <Box sx={{width:'100%', display:'flex', flexDirection:{xs:'column',md:'row'}}}>
            <Box sx={{width:{xs:'100%',md:'33%'}}}>
            <h3 style={{marginTop:0, marginLeft:10, color:'white'}}>
                Info
            </h3>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <MarkerIcon/>
                    <p>Direccion: calle falsa 123</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <PhoneIcon/>
                    <p>Telefono: 0220-1234323</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <EmailIcon/>
                    <p>Email: gctecSolutions@gamil.com</p>
                </Box>
            </Box>

            <Box sx={{width:{xs:'100%',md:'33%'}}}>
            <h3 style={{marginTop:0, marginLeft:10, color:'white'}}>
                Links utiles
            </h3>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <p>Sobre nosotros</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <p>Nuestros servicios</p>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <p>Posts</p>
                </Box>
            </Box>

            <Box sx={{width:{xs:'100%',md:'33%',mb:{xs:3,md:0}}}}>
            <h3 style={{marginTop:0, marginLeft:10, color:'white'}}>
                nuestras redes
            </h3>
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',ml:2}}>
                    <FacebookIcon fontSize='medium' sx={{color:{xs:'#4f6cf4',md:'white'}}}/>
                    <InstagramIcon fontSize='medium' sx={{color:{xs:'#4f6cf4',md:'white'}, ml:3}}/>
                    <LinkedInIcon fontSize='medium' sx={{color:{xs:'#4f6cf4',md:'white'}, ml:3}}/>
                    <WhatsAppIcon fontSize='medium' sx={{color:{xs:'#4f6cf4',md:'white'}, ml:3}}/>
                </Box>
            </Box>
          </Box>
      </Box>
  )
}

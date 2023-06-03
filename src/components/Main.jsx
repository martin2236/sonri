import React from 'react'
import Box from '@mui/material/Box';
import mainImage from '../assets/mainImage.png'

export const Main = () => {

  return (
    <Box sx={{
        width:'100%',
        height:{xs:'50vh',md:'80vh'},
        alignSelf:'center',
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        backgroundColor:'white',
        m:0,
        p:0,
      }}>
        <Box sx={{
            height:{xs:'50vh',md:'80vh'}, 
            width:'100%',
            backgroundColor: '#fff',
            m:0,
            p:0,
        }}>
            <h3 style={{marginLeft:10,marginTop:20,paddingLeft:10,fontSize:'calc(0.8em + 1vw)'}}>
                Quienes somos?
            </h3>
            <p 
                style={{width:'80%', display:'block',marginLeft:'auto',marginRight:'auto', textAlign:'center',paddingTop:20,fontSize:'calc(0.6em + 1vw)',alignSelf:'center'}}
            >
                GCTech es una empresa líder en soluciones tecnológicas. Nos especializamos en desarrollo de software, servicios en la nube y consultoría tecnológica. Nuestro enfoque se centra en proporcionar a nuestros clientes soluciones personalizadas que impulsen su transformación digital. Además, ofrecemos un servicio de monitoreo IT integral, garantizando la disponibilidad y seguridad de los sistemas clave para el éxito empresarial.
            </p>
        </Box>
        <Box sx={{
            height:'80vh', 
            width:'100%',
            backgroundColor: '#fff',
            display:{xs:'none',md:'flex'},
            justifyContent:'center',
            alignItems:'center',
            m:0,
            p:0,
        }}>
            <img
                style={{height:'70vh'}}
                src={`${mainImage}`}
            />
        </Box>

    </Box>
  )
}
import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import background from '../assets/monitoreo.gif'
import fondo from '../assets/fondo.png'
import bgRound from '../assets/bg-round.png'
import bgTree from '../assets/bg-tree.png'
import TextTransition, { presets } from 'react-text-transition';
import Button from '@mui/material/Button';

const TEXTS = ['Los mejores profesionales', 'El software más veloz', 'La mejor atención al cliente'];

export const Header2 = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          5000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

  return (
    <Box sx={{
        width:'100%',
        minHeight: '100vh',
        alignSelf:'center',
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        backgroundColor:'blue',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        m:0,
        p:0,
        marginTop:{xs:0,md:5}
      }}>
        <Box sx={{
            minHeight:'100vh', 
            width:{xs:'100%',md:'50%'},
            backgroundColor:`transparent`,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            m:0,
            p:0,
        }}>
            <h1 style={{color:'white', marginTop:100,marginLeft:10,marginRight:10, textAlign:'center',fontSize:'calc(1em + 1vw)'}}>
                Bienvenidos a GCTEC <br/> Empresa lider en MONITOREO DE REDES Y SOPORTE 24/7
            </h1>
            <Box style={{width:'100%', marginTop:10, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                <h2 style={{color:'white', textAlign:'center', marginRight:10,}}>Contamos con:</h2>
                <TextTransition style={{color:'#fff', textAlign:'center', fontSize:25, lineHeight:1}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </Box>

            <Box sx={{display:{xs:'inherit',md:'none'}}}>
                <img style={{height:300,maxWidth:'100%', marginTop:10}}  src={`${background}`}/>
            </Box>
            
            <Button variant='contained' sx={{ mt:{xs:5,md:5},mb:10, color: '#4f6cf4',backgroundColor:'#fff', borderColor: 'cyan', width:150}}>
                Contactanos
            </Button>
        </Box>
        <Box sx={{
            height:'100vh', 
            width:'50%',
            backgroundColor:`transparent`,
            display:{xs:'none',md:'flex'},
            alignItems:'center',
            justifyContent:'center',
            m:0,
            p:0,
        }}>
            <img style={{height:'90%',maxWidth:'100%', marginTop:10}}  src={`${background}`}/>
        </Box>

    </Box>
  )
}

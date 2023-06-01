import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import background from '../assets/backGround.gif'
import TextTransition, { presets } from 'react-text-transition';
import Button from '@mui/material/Button';

const TEXTS = ['Los mejores profesionales', 'El software más veloz', 'La mejor atención al cliente'];

export const Header = () => {
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
        height: '100vh',
        alignSelf:'center',
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        m:0,
        p:0,
      }}>
        <Box sx={{
            height:'100vh', 
            width:'100%',
            backgroundImage:`url(${background})`,
            m:0,
            p:0,
        }}>
            <h1 style={{color:'white', marginTop:120,marginLeft:10,marginRight:10, textAlign:'center',fontSize:'calc(1em + 1vw)'}}>
                Bienvenidos a GCTEC <br/> Empresa lider en MONITOREO DE REDES Y SOPORTE 24/7
            </h1>
            <div style={{width:'100%', marginTop:70, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                <h2 style={{color:'white', textAlign:'center', marginRight:10,}}>Contamos con:</h2>
                <TextTransition style={{color:'cyan', textAlign:'center', fontSize:25, lineHeight:1}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>
            
            <div style={{height:'100%', width:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
               <div>
                    <Button variant='outlined' sx={{ color: 'cyan', borderColor: 'cyan', marginBottom:20 }}>
                        más
                    </Button>
               </div>
            </div>
        </Box>

    </Box>
  )
}

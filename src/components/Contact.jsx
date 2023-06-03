import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Contact = () => {
  return (
    <Box sx={{minHeight:'80vh', backgroundColor:'#4f6cf4', display:'flex', flexDirection:{xs:'column',md:'row'}}}>
        <Box sx={{minHeight:{xs:'40vh',md:'80vh'}, width:{xs:'90%',md:'50%'}}}>
            <h1 style={{marginLeft:10,color:'#FFF'}}>Contacto</h1>
            <Box sx={{ ml:5,width:'90%'}}>
                <h4 style={{lineHeight:2,marginLeft:10,color:'#FFF', width:'80%',textAlign:'center'}}>
                    Nuestros Expertos estan disponibles las 24 hs para responder cualquier consulta que tenga sobre nuestros productos o servicios.
                </h4>
            </Box>
        </Box>
        <Box sx={{minHeight:{xs:'40vh',md:'80vh'}, width:{xs:'100%',md:'50%'},backgroundColor:'#4f6cf4', display:'flex', alignItems:'center',justifyContent:'center'}}>
            <Box sx={{borderRadius:{xs:3,md:10},height:'90%' ,width:'90%', dislay:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#FFF'}}>
                <Box sx={{ml:{xs:2,md:3},mt:{xs:2,md:3},display:'flex',flexDirection:{xs:'column',md:'row'},width:'90%', justifyContent:'space-between'}}>
                    <TextField sx={{width:{xs:'100%',md:'48%'}, backgroundColor:'#FFF'}} label='nombre' variant='outlined'/>
                    <TextField sx={{mt:{xs:2,md:0},width:{xs:'100%',md:'48%'}, backgroundColor:'#FFF'}} label='email' variant='outlined'/>
                </Box>
                    <TextField sx={{ml:{xs:2,md:3},width:'90%', mt:2, backgroundColor:'#FFF'}} label='asunto' variant='outlined'/>
                    <TextField sx={{ml:{xs:2,md:3},width:'90%', mt:2, backgroundColor:'#FFF'}} label='mensaje' variant='outlined' multiline rows={5}/>
                    <Button variant='contained' sx={{ mt:{xs:3,md:3},mb:{xs:2, md:5}, ml:{xs:2,md:3}, color: '#fff',backgroundColor:'#4f6cf4', borderColor: 'cyan', width:'90%', height:50}}>
                        Contactanos
                    </Button>
            </Box>
        </Box>
    </Box>
  )
}

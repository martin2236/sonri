import React from 'react'
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import DnsIcon from '@mui/icons-material/Dns';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';


export const Statistics = () => {
  return (
    <Box
        sx={{
            mt:5,
            minHeight:{xs:'40vh',md:'20vh'},
            width:'100%',
            display:'flex',
            flexDirection:{xs:'column',md:'row'},
            justifyContent:'space-around',
            alignItems:'center',
            backgroundColor:'#4f6cf4'
        }}
    >
        <Box style={{ width:{xs:'80%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <WarningIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:200,md:'inherit'}, display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:'calc(0.3em + 4vw)',margin:0}}>+ 1000 </p>
                <p style={{color:'#fff',fontSize:'calc(0.4em + 1vw)',margin:0}}>Alertas gestionadas por mes</p>
            </Box>
        </Box>
        <Box style={{ width:{xs:'80%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <DnsIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:200,md:'inherit'},display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:'calc(0.3em + 4vw)',margin:0}}>+ 3000 </p>
                <p style={{color:'#fff',fontSize:'calc(0.4em + 1vw)',margin:0}}>Host configurados con éxito</p>
            </Box>
        </Box>
        <Box style={{ width:{xs:'0%',md:'28%'},display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
            <CodeOffSharpIcon sx={{color:'white',fontSize:'calc(1em + 4vw)'}}/>
            <Box sx={{ ml:{xs:3,md:5},width:{xs:200,md:'inherit'}, display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:'calc(0.3em + 4vw)',margin:0}}>+ 300 </p>
                <p style={{color:'#fff',fontSize:'calc(0.4em + 1vw)',margin:0}}> hs de soporte tecnico profesional</p>
            </Box>
        </Box>
    </Box>
  )
}

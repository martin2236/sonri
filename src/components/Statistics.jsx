import React from 'react'
import Box from '@mui/material/Box';
import WarningIcon from '@mui/icons-material/Warning';
import DnsIcon from '@mui/icons-material/Dns';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';

export const Statistics = () => {
  return (
    <Box
        sx={{
            height:{xs:'40vh',md:'20vh'},
            width:'100%',
            display:'flex',
            flexDirection:{xs:'column',md:'row'},
            justifyContent:'space-around',
            backgroundColor:'#111111'
        }}
    >
        <Box style={{ width:{xs:'100%',md:'28%'}, display:'flex', flexDirection:'row', alignItems:'center',justifyContent:{xs:'center',md:'space-around'}}}>
            <WarningIcon sx={{color:'white',fontSize:'calc(1em + 3vw)'}}/>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.3em + 3vw)',md:'calc(0.3em + 2vw)'},margin:0}}>+ 1000 </p>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.4em + 2vw)',md:'calc(0.4em + 1vw)'},margin:0}}>Alertas gestionadas por mes</p>
            </Box>
        </Box>
        <Box style={{ width:{xs:'100%',md:'28%'}, display:'flex', flexDirection:'row', alignItems:'center',justifyContent:{xs:'center',md:'space-around'}}}>
            <DnsIcon sx={{color:'white',fontSize:'calc(1em + 3vw)'}}/>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.3em + 3vw)',md:'calc(0.3em + 2vw)'},margin:0}}>+ 3000 </p>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.4em + 2vw)',md:'calc(0.4em + 1vw)'},margin:0}}>Host configurados</p>
            </Box>
        </Box>
        <Box style={{ width:{xs:'100%',md:'28%'}, display:'flex', flexDirection:'row', alignItems:'center',justifyContent:{xs:'center',md:'space-around'}}}>
            <CodeOffSharpIcon sx={{color:'white',fontSize:'calc(1em + 3vw)'}}/>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignImtes:'center'}}>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.3em + 3vw)',md:'calc(0.3em + 2vw)'},margin:0}}>+ 300 </p>
                <p style={{color:'#fff',fontSize:{sx:'calc(0.4em + 2vw)',md:'calc(0.4em + 1vw)'},margin:0}}> integraciones</p>
            </Box>
        </Box>
    </Box>
  )
}

import React from 'react'
import Box from '@mui/material/Box';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './stackSlider.css'
import elastic from '../../assets/technologies/elastic.png'
import grafana from '../../assets/technologies/grafana.png'
import prometeus from '../../assets/technologies/prometeus.png'
import python from '../../assets/technologies/python.png'
import solarwinds from '../../assets/technologies/solarwinds.png'
import zabbix from '../../assets/technologies/zabbix.png'
import fondo from '../../assets/bg-top.png'

const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

export const StackSlider = () => {
    const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay(autoplayOptions)])
    const [emblaRef1] = useEmblaCarousel({loop:true},[Autoplay(autoplayOptions)])
  return (
    <Box sx={{
        height:120,
        width:'100%',
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        alignItems:'center',
        justifyContent:{xs:'center',md:'inherit'},
        backgroundColor:'#4f6cf4',
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        marginTop:5
    }}>
        <Box sx={{display:{xs:'none',md:'inherit'}}} className="embla" ref={emblaRef1}>
            <Box sx={{display:{xs:'none',md:'inherit'},width:'100%'}} className="embla__container">
                <Box sx={{display:{xs:'none',md:'inherit'}}} className="embla__slide" style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
                    <img style={{height:100,borderRadius:5}} src={`${elastic}`}/>
                    <img style={{height:100,borderRadius:5}} src={`${grafana}`}/>
                    <img style={{height:100,borderRadius:5}} src={`${prometeus}`}/>
                </Box>
                <Box sx={{display:{xs:'none',md:'inherit'}}} className="embla__slide" style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
                    <img style={{height:100,borderRadius:5}} src={`${python}`}/>
                    <img style={{height:100,borderRadius:5}} src={`${solarwinds}`}/>
                    <img style={{height:100,borderRadius:5}} src={`${zabbix}`}/>
                </Box>
            </Box>
        </Box>

        <Box sx={{display:{xs:'flex',md:'none'}, maxWidth:'100%', alignItems:'center', justifyContent:'space-between'}} className="embla" ref={emblaRef}>
            <Box sx={{width:320}} className="embla__container">
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                    <img style={{height:100,borderRadius:5}} src={`${elastic}`}/>
                </Box>
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                  <img style={{height:100,borderRadius:5}} src={`${grafana}`}/>
                </Box>
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                  <img style={{height:100,borderRadius:5}} src={`${prometeus}`}/>
                </Box>
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                    <img style={{height:100,borderRadius:5}} src={`${python}`}/>
                </Box>
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                    <img style={{height:100,borderRadius:5}} src={`${solarwinds}`}/>
                </Box>
                <Box sx={{display:{xs:'inherit',md:'none'}}} className="embla__slide" >
                    <img style={{height:100,borderRadius:5}} src={`${zabbix}`}/>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

import React from 'react'
import Box from '@mui/material/Box';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './stackSlider.css'

const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }

export const StackSlider = () => {
    const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay(autoplayOptions)])
  return (
    <Box sx={{
        height:50,
        width:'100%',
        backgroundColor:'#111111'
    }}>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    </Box>
  )
}

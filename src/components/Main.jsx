import React,{useRef} from 'react'
import Box from '@mui/material/Box';
import mainImage from '../assets/mainImage.png'
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion, useScroll } from "framer-motion";


const theme = createTheme();

theme.typography.body1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.0rem',
  },
};



export const Main = ({main}) => {
  const { scrollYProgress } = useScroll();

  return (
    <ThemeProvider theme={theme}>
      <Box
      ref={main}
        sx={{
          width: "100%",
          minHeight: { xs: "50vh", md: "80vh" },
          alignSelf: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "white",
          m: 0,
          p: 0,
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "50vh", md: "80vh" },
            width: { xs: "100%", md: "50%" },
            backgroundColor: "#fff",
            m: 0,
            p: 0,
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginLeft: 1, marginTop: 5, mb: { xs: 4, md: 0 } }}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quienes somos?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection:'column',
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb:{xs:2},
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                textJustify:'center',
                textAlign:'center'
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: scrollYProgress >= 300 ? 1 : 0,
                y: scrollYProgress >= 300 ? 0 : 50,
              }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              GCTech es una empresa líder en soluciones tecnológicas. Nos
              especializamos en desarrollo de software, servicios en la nube y
              consultoría tecnológica. Nuestro enfoque se centra en proporcionar
              a nuestros clientes soluciones personalizadas que impulsen su
              transformación digital. Además, ofrecemos un servicio de
              monitoreo IT integral, garantizando la disponibilidad y seguridad
              de los sistemas clave para el éxito empresarial.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "80vh",
            width: "50%",
            backgroundColor: "#fff",
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            m: 0,
            p: 0,
          }}
        >
          <img
            style={{ height: "80%" }}
            src={`${mainImage}`}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
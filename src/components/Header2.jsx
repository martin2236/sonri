import React,{useEffect,useState,useRef} from 'react'
import Box from '@mui/material/Box';
import background from '../assets/monitoreo.gif'
import fondo from '../assets/fondo.png'
import TextTransition, { presets } from 'react-text-transition';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";

const TEXTS = ['Los mejores profesionales', 'El software más veloz', 'La mejor atención al cliente'];

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.1rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.6rem',
  },
};

theme.typography.h3 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.3rem',
    },
  };

  theme.typography.h5 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.8rem',
    },
  };

  export const Header2 = ({header}) => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        5000 // cada 5 segundos
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <ThemeProvider theme={theme}>
        <Box
        ref={header}
          sx={{
            width: "100%",
            minHeight: "100vh",
            alignSelf: "center",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "white",
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            m: 0,
            p: 0,
            marginTop: { xs: 0, md: 5 },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              minHeight: "100vh",
              width: { xs: "100%", md: "50%" },
              backgroundColor: `transparent`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              m: 0,
              p: 0,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mt: { xs: 15, md: 15, lg: 10, xl: 20 },
                mb: { xs: 5, md: 10, lg: 5, xl: 10 },
                textJustify: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              Bienvenidos a GCTEC <br /> Empresa líder en MONITOREO DE REDES Y
              SOPORTE 24/7
            </Typography>
            <Box
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h3"
                sx={{ color: "white", mr: 2 }}
                component={motion.div}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Contamos con:
              </Typography>
              <TextTransition
                style={{ color: "#fff" }}
                springConfig={presets.wobbly}
              >
                <Typography
                  variant="h3"
                  sx={{
                    lineHeight: { lg: 0.7, xl: 0.5 },
                    fontWeight: "500",
                  }}
                  component={motion.div}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {TEXTS[index % TEXTS.length]}
                </Typography>
              </TextTransition>
            </Box>

            <Box
            sx={{
              display: { xs: "inherit", md: "none" },
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <img
              style={{ height: 300, maxWidth: "100%", marginTop: 10 }}
              src={`${background}`}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: { xs: 4, md: 10, lg: 7, xl: 15 },
              mb: 10,
              color: "#4f6cf4",
              backgroundColor: "#fff",
              borderColor: "cyan",
              width: { md: 180, lg: 180, xl: 250 },
              height: { md: 40, lg: 50, xl: 60 },
            }}
            component={motion.button}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Typography variant="h5" sx={{ fontWeight: "400" }}>
              Contactanos
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "50%",
            backgroundColor: `transparent`,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            m: 0,
            p: 0,
          }}
        >
          <img
            style={{ height: "90%", maxWidth: "100%", marginTop: 10 }}
            src={`${background}`}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

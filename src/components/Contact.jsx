import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as yup from 'yup';


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

const validationSchema = yup.object({
    nombre: yup.string().required('El nombre es requerido'),
    email: yup.string().email('Ingrese un correo válido').required('El correo es requerido'),
    asunto: yup.string().required('El asunto es requerido'),
    mensaje: yup.string().required('El mensaje es requerido'),
  });

export const Contact = ({contact}) => {
    const initialValues = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
      };
      
      const onSubmit = (values) => {
        // Aquí puedes realizar la lógica de envío del formulario
        console.log(values);
      };
      const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
  return (
   <ThemeProvider theme={theme}>
         <Box ref={contact} sx={{minHeight:'80vh', backgroundColor:'#4f6cf4', display:'flex', flexDirection:{xs:'column',md:'row'}}}>
        <Box sx={{backgroundColor:'#4f6cf4',minHeight:{xs:'40vh',md:'80vh'}, width:{xs:'90%',md:'50%'}}}>
            <h1 style={{marginLeft:10,color:'#FFF'}}>Contacto</h1>
            <Box
             component={motion.div}
             initial={{ x: '-100%' }}
             whileInView={{ x: 0 }}
             transition={{ duration: 1 }}
            sx={{ ml:5,width:'90%'}}>
                <Typography variant='body1' sx={{color:'#FFF', textAlign:'center'}}>
                    Nuestros Expertos estan disponibles las 24 hs para responder cualquier consulta que tenga sobre nuestros productos o servicios.
                </Typography>
            </Box>
        </Box>
        <Box
         component={motion.div}
         initial={{ x: '-100%' }}
         whileInView={{ x: 0 }}
         transition={{ duration: 1 }}
        sx={{minHeight:{xs:'40vh',md:'80vh'}, width:{xs:'100%',md:'50%'},backgroundColor:'#4f6cf4', display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ mb: { xs: 1 }, borderRadius: { xs: 3, md: 10 }, height: '90%', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#FFF' }}>
                    <Box sx={{ pt: 5, px: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ width: { xs: '100%', md: '48%' }, backgroundColor: '#FFF' }}
                        label="nombre"
                        variant="outlined"
                        name="nombre"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                    <TextField
                        sx={{ mt: { xs: 2, md: 0 }, width: { xs: '100%', md: '48%' }, backgroundColor: '#FFF' }}
                        label="email"
                        variant="outlined"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    </Box>
                    <Box sx={{ mt: 2, px: 2, width: '100%' }}>
                    <TextField
                        sx={{ width: '100%', backgroundColor: '#FFF' }}
                        label="asunto"
                        variant="outlined"
                        name="asunto"
                        value={formik.values.asunto}
                        onChange={formik.handleChange}
                        error={formik.touched.asunto && Boolean(formik.errors.asunto)}
                        helperText={formik.touched.asunto && formik.errors.asunto}
                            />
                        </Box>
                        <Box sx={{ mt: 2, px: 2, width: '100%' }}>
                            <TextField
                            sx={{ width: '100%', backgroundColor: '#FFF' }}
                            label="mensaje"
                            variant="outlined"
                            multiline
                            rows={5}
                            name="mensaje"
                            value={formik.values.mensaje}
                            onChange={formik.handleChange}
                            error={formik.touched.mensaje && Boolean(formik.errors.mensaje)}
                            helperText={formik.touched.mensaje && formik.errors.mensaje}
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: { xs: 3, md: 3 }, mb: { xs: 2, md: 5 }, ml: { xs: 2, md: 3 }, color: '#fff', backgroundColor: '#4f6cf4', borderColor: 'cyan', width: '90%', height: 50 }}
                        >
                            Contactanos
                        </Button>
                        </Box>
      </form>
        </Box>
    </Box>
   </ThemeProvider>
  )
}

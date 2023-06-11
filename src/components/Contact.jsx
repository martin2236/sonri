import React,{useState} from 'react';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import fondo from '../assets/bg-newsletter.png';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
    user_name: yup.string().required('El nombre es requerido'),
    user_email: yup.string().email('Ingrese un correo válido').required('El correo es requerido'),
    asunto: yup.string().required('El asunto es requerido'),
    message: yup.string().required('El mensaje es requerido'),
  });

export const Contact = ({contact}) => {
    const initialValues = {
        user_name: '',
        user_email: '',
        asunto: '',
        message: '',
      };

      const [snackbar, setSnackbar] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        severity:'success',
        message:'Mensaje enviado con Éxito'
      });

      const { vertical, horizontal, open, severity,message } = snackbar;

      const openSnackbar = (newState) => {
        console.log('abriendo')
        setSnackbar({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setSnackbar({ ...snackbar, open: false });
      };
    
      
      const onSubmit = (values,{ resetForm }) => {
        emailjs.sendForm('service_6dljxth', 'template_u7jmdfw', '#myForm', 'gs0RrVdc9fbTsb_i_')
            .then((result) => {
                console.log(result.text);
                resetForm()
                openSnackbar({
                    vertical: 'bottom',
                    horizontal: 'center',
                    severity:'success',
                    message:'Mensaje enviado con Éxito'
                  })
            }, (error) => {
                console.log(error.text);
                openSnackbar({
                    vertical: 'bottom',
                    horizontal: 'center',
                    severity:'warning',
                    message:'Ups ocurrió un error por favor intente más tarde'
                  })
            });
      };
      const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
  return (
   <ThemeProvider theme={theme}>
         <Box ref={contact} sx={{
                minHeight:'80vh', 
                backgroundColor:'#4f6cf4', 
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display:'flex', 
                flexDirection:{xs:'column',md:'row'}
                }}
            >
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
            sx={{minHeight:{xs:'40vh',md:'80vh'}, width:{xs:'100%',md:'50%'},mt:2,backgroundColor:'#4f6cf4', display:'flex', alignItems:'center',justifyContent:'center'}}>
                <form id="myForm" style={{width:'100%',display:'flex', alignItems:'center',justifyContent:'center'}} onSubmit={formik.handleSubmit}>
                    <Box sx={{ mb: { xs: 1 }, borderRadius: { xs: 3, md: 10 }, height: '90%', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#FFF' }}>
                        <Box sx={{ pt: 5, px: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', justifyContent: 'space-between' }}>
                            <TextField
                                InputProps={{
                                    style: {
                                    fontSize: '17px', 
                                    },
                                }}
                                sx={{ width: { xs: '100%', md: '48%' }, backgroundColor: '#FFF' }}
                                label="nombre"
                                variant="outlined"
                                name="user_name"
                                value={formik.values.user_name}
                                onChange={formik.handleChange}
                                error={formik.touched.user_name && Boolean(formik.errors.user_name)}
                                helperText={formik.touched.user_name && formik.errors.user_name}
                                size="small"
                            />
                            <TextField
                                 InputProps={{
                                    style: {
                                    fontSize: '17px', 
                                    },
                                }}
                                sx={{ mt: { xs: 2, md: 0 }, width: { xs: '100%', md: '48%' }, backgroundColor: '#FFF' }}
                                label="email"
                                variant="outlined"
                                name="user_email"
                                value={formik.values.user_email}
                                onChange={formik.handleChange}
                                error={formik.touched.user_email && Boolean(formik.errors.user_email)}
                                helperText={formik.touched.user_email && formik.errors.user_email}
                                size="small"
                            />
                        </Box>
                        <Box sx={{ mt: 2, px: 2, width: '100%' }}>
                            <TextField
                                 InputProps={{
                                    style: {
                                    fontSize: '17px', 
                                    },
                                }}
                                sx={{ width: '100%', backgroundColor: '#FFF' }}
                                label="asunto"
                                variant="outlined"
                                name="asunto"
                                value={formik.values.asunto}
                                onChange={formik.handleChange}
                                error={formik.touched.asunto && Boolean(formik.errors.asunto)}
                                helperText={formik.touched.asunto && formik.errors.asunto}
                                size="small"
                            />
                        </Box>
                            <Box sx={{ mt: 2, px: 2, width: '100%' }}>
                                <TextField
                                    InputProps={{
                                        style: {
                                        fontSize: '17px', 
                                        },
                                    }}
                                    sx={{ width: '100%', backgroundColor: '#FFF' }}
                                    label="mensaje"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    name="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}
                                    size="small"
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
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                autoHideDuration={4000}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                                    {message}
                </Alert>
            </Snackbar>
            
        </Box>
   </ThemeProvider>
  )
}

import React,{useState,useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab'
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/logo.jpeg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, useScroll } from "framer-motion";

const pages = ['Quienes somos','Que hacemos', 'Presupuesto', 'Blog','WhatsApp'];


export const Appbar = ({handleButtonClick}) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [color,setColor]= useState('#FFF')
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const openWhatsappChat = () => {
        const phoneNumber = '123456789'; // Número de teléfono al que deseas enviar el mensaje
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      };
  
    return (
      <AppBar sx={{backgroundColor:'white'}}>
        <Container >
          <Toolbar disableGutters>
          <img  
                style={{height:100}}
                src={`${logo}`}
                alt={'logo'}
                loading="lazy"
            />
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:'flex-end'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={(event)=>handleButtonClick(event,page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
           
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end', mr:5 }}>
              {pages.map((page) => {
                 if (page === 'WhatsApp' && !isMobile) {
                    return null; // Oculta el enlace de contacto en dispositivos no móviles
                  }
                return(
                    <Button
                    key={page}
                    onClick={(event)=>handleButtonClick(event,page)}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                    {page}
                    </Button>
              )}
              )}
            </Box>
  
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }  }}>
                <Fab onClick={()=>openWhatsappChat()} onMouseEnter={()=>{setColor('#4f6cf4')}} onMouseLeave={()=>{setColor('#fff')}} sx={{width:40,height:40,borderRadius:28,backgroundColor:'#4f6cf4'}} variant="contained">
                    <WhatsAppIcon  sx={{color,position:'absolute', fontSize:{xl:50}}}/>
                </Fab>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

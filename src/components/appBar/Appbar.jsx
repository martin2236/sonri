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
import AdbIcon from '@mui/icons-material/Adb';
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/logo.jpeg'

const pages = ['Quienes somos','Que hacemos', 'Clientes', 'Blog','Contacto'];


export const Appbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
           
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'flex-end', mr:5 }}>
              {pages.map((page) => {
                 if (page === 'Contacto' && !isMobile) {
                    return null; // Oculta el enlace de contacto en dispositivos no móviles
                  }
                return(
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                    {page}
                    </Button>
              )}
              )}
            </Box>
  
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }  }}>
                <Button variant="contained">Contacto</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

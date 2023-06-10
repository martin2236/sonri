import { useState,useRef } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {Appbar} from './components/appBar/Appbar.jsx';
import {Header2} from './components/Header2.jsx'
import {Main} from './components/Main.jsx'
import {StackSlider} from './components/stackSlider/StackSlider.jsx'
import {Statistics} from './components/Statistics.jsx'
import {Services} from './components/Services.jsx'
import {Post} from './components/posts/Post.jsx'
import {Contact} from './components/Contact.jsx'
import {Footer} from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)
  const header = useRef(null);
  const main = useRef(null);
  const services = useRef(null);
  const post= useRef(null);
  const contact = useRef(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleButtonClick = (event,page) => {
    console.log(page)
    switch(page){
        case 'Quienes somos':
            if (main.current) {
                handleButtonClick()
                window.scrollTo({
                top: main.current.offsetTop,
                behavior: 'smooth',
            });
        }
        break;
        case 'Que hacemos':
            if (services.current) {
                handleButtonClick()
                window.scrollTo({
                top: services.current.offsetTop,
                behavior: 'smooth',
            });
        }
        break;
        case 'Blog':
            if (post.current) {
                handleButtonClick()
                window.scrollTo({
                top: post.current.offsetTop,
                behavior: 'smooth',
            });
        }
        break;
        case 'Presupuesto':
            if (contact.current) {
                window.scrollTo({
                top: contact.current.offsetTop,
                behavior: 'smooth',
            });
        }
        break;
       
    }
    
  };
  

  return (
    <>
        <CssBaseline/>
        <Container sx={{p:0, bgcolor:'white'}} maxWidth={false} disableGutters>
            <Appbar handleButtonClick={handleButtonClick}/>
            <Header2 id="header" header={header}/>
            <Main id="main" main={main}/>
            <Statistics id="statistics" />
            <Services id="services" services={services}/>
            <StackSlider id="stackSlider" />
            <Post id="post" post={post}/>
            <Contact id="contact" contact={contact}/>
            <Footer/>
        </Container>
    </>
  )
}

export default App

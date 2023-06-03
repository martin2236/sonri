import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {Appbar} from './components/appBar/Appbar.jsx';
import {Header} from './components/Header.jsx'
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

  return (
    <>
        <CssBaseline/>
        <Container sx={{p:0, bgcolor:'white'}} maxWidth={false} disableGutters>
            <Appbar/>
            <Header2/>
            <Main/>
            <Statistics/>
            <Services/>
            <StackSlider/>
            <Post/>
            <Contact/>
            <Footer/>
        </Container>
    </>
  )
}

export default App

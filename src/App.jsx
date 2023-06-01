import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {Appbar} from './components/appBar/Appbar.jsx';
import {Header} from './components/Header.jsx'
import {Main} from './components/Main.jsx'
import {StackSlider} from './components/stackSlider/StackSlider.jsx'
import {Statistics} from './components/Statistics.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CssBaseline/>
        <Container sx={{p:0, bgcolor:'red'}} maxWidth={false} disableGutters>
            <Appbar/>
            <Header/>
            <StackSlider/>
            <Main/>
            <Statistics/>
        </Container>
    </>
  )
}

export default App

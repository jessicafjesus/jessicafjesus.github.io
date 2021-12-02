import './App.css';
import React from "react";
import Header from './components/header/Header';
import { Routes, Route} from "react-router-dom";
import {Activities, Home, Museums, SignIn, VisitTogether} from "./pages";
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: '#00A3A3'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/museums' element={<Museums/>} />
        <Route path='/visitTogether' element={<VisitTogether/>} />
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </ThemeProvider>
 )
}

export default App;

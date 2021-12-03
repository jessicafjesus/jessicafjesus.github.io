import './App.css';
import React from "react";
import Header from './components/header/Header';
import { Routes, Route} from "react-router-dom";
import {Activities, Home, Museums, SignIn, VisitTogether} from "./pages";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ProfilePage from "./pages/profiles"


const theme = createTheme({
  palette: {
    primary: {
      main: '#00A3A3'
    },
    success: {
      main: '#FFA552'
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
        <Route path='/profile' element={<ProfilePage/>} />
    </Routes>
    </ThemeProvider>
 )
}

export default App;

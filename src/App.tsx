import './App.css';
import React from "react";
import Header from './components/header/Header';
import { Routes, Route} from "react-router-dom";
import {Activities, Museums, SignIn, VisitTogether} from "./pages";
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import ProfilePage from "./pages/profiles";
import CreateVisit from "./components/museum/CreateVisit";

import GetTickets from "./components/museum/BuyTickets";


const theme = createTheme({
  palette: {
    primary: {
      main: '#00A3A3'
    },
    secondary: {
      main: '#191f24'
    },
    success: {
      main: '#FFA552'
    },
    warning: {
      main: '#47525E'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    <Routes>
        <Route path='/activities' element={<Activities/>} />
        <Route path='/museums' element={<Museums/>} />
        <Route path='/visitTogether' element={<VisitTogether/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        
        <Route path='/createVisit' element={<CreateVisit/>} />
        
        <Route path='/getTickets' element={<GetTickets/>} />

    </Routes>
    </ThemeProvider>
 )
}

export default App;

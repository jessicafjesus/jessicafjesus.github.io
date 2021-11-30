import './App.css';
import ReactDOM from "react-dom";
import React from "react";
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import {Activities, Home, Museums, SignIn, VisitTogether} from "./pages";
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/museums' element={<Museums/>} />
        <Route path='/visitTogether' element={<VisitTogether/>} />
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </Fragment>
 )
}

export default App;

import './App.css';
import ReactDOM from "react-dom";
import react from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages';
import Activities from './pages/activities';
import Museums from './pages/museums';
import VisitTogether from './pages/visitTogether';

function App() {
  return (
    ReactDOM.render(
    <Router>
      <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/museums' element={<Museums/>} />
        <Route path='/visitTogether' element={<VisitTogether/>} />
      </Routes>
    </Router>,document.getElementById("root")
 )
  );
}

export default App;

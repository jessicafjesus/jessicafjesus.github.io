import './App.css';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Activities, Home, Museums, SignIn, VisitTogether} from "./pages";


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
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </Router>,document.getElementById("root")
 )
);
}

export default App;

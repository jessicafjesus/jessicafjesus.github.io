import React from 'react';
import "./Navbar.css";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, SearchBar, SecondNav, NavLinkLogo} from './NavbarElements';
import logo from '../../images/amuseBranco.png';
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from '@material-ui/icons/Tune';

const Navbar = () => {
    return (
        <>
          <nav className="nav">
              <NavLinkLogo to="/">
              <img src={logo}  className="App-logo" alt="logo" width="163" height="40"/>
              </NavLinkLogo>
              <Bars/>
              <NavMenu>
                  <NavLink to="/activities" activeStyle>
                    ACTIVITIES
                  </NavLink>
                  <NavLink to="/museums" activeStyle>
                    MUSEUMS
                  </NavLink>
                  <NavLink to="/visitTogether" activeStyle>
                    VISIT TOGETHER
                  </NavLink>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin" activeStyle>Log in</NavBtnLink>
              </NavBtn>
          </nav>
          <SecondNav>
            <TuneIcon style={{ color: 'white' }}/>
            <SearchBar type="text" placeholder="Search..." />
            <SearchIcon style={{ color: 'white' }}/>
          </SecondNav>
          
        </>
    )
}

export default Navbar

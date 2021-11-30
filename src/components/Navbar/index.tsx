import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, SearchBar, SecondNav, NavLinkLogo} from './NavbarElements';
import logo from '../../images/amuseBranco.png';
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from '@material-ui/icons/Tune';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLinkLogo to="/">
              <img src={logo}  className="App-logo" alt="logo" width="163" height="40"/>
              </NavLinkLogo>
              <Bars/>
              <NavMenu>
                  <NavLink to="/activities" >
                    ACTIVITIES
                  </NavLink>
                  <NavLink to="/museums" >
                    MUSEUMS
                  </NavLink>
                  <NavLink to="/visitTogether" >
                    VISIT TOGETHER
                  </NavLink>
              </NavMenu>
              <NavBtn>
                  <NavBtnLink to="/signin" >Log in</NavBtnLink>
              </NavBtn>
          </Nav>
          <SecondNav>
            <TuneIcon style={{ color: 'white' }}/>
            <SearchBar type="text" placeholder="Search..." />
            <SearchIcon style={{ color: 'white' }}/>
          </SecondNav>
          
        </>
    )
}

export default Navbar

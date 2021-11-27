import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../images/amusefinal2.svg';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
              <img src={logo}  className="App-logo" alt="logo"/>
              </NavLink>
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
                  <NavBtnLink to="/signin">Log in</NavBtnLink>
              </NavBtn>
          </Nav>
        </>
    )
}

export default Navbar

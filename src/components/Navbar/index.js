import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../images/amuseBranco.png';

const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to="/">
              <img src={logo}  className="App-logo" alt="logo" width="163" height="40"/>
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
                  <NavBtnLink to="/signin" activeStyle>Log in</NavBtnLink>
              </NavBtn>
          </Nav>
        </>
    )
}

export default Navbar

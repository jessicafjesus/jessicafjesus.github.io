import styled from "styled-components";
import { NavLink as Link} from 'react-router-dom';
import {FaBars}  from 'react-icons/fa';

export const Nav = styled.nav`
    background: #00A3A3;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 50px;
    z-index:10;
`
export const SecondNav = styled.nav`
    background: #00A3A3;
    height: 100px;
    display: flex;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index:10;
`


export const NavLink = styled(Link)`
    color: #191F24;
    display: flex;
    align-items: center;
    padding: 30px;
    height: 100%;
    outline: none;
    border: 0px;
    border-radius:10px;
    cursor: pointer;
    background-color:#fff;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    &.active {
        color: #fff;
        background-color:#191F24;
        outline: auto;
        border: 3px;
        font-weight:bold;
      }
`
export const NavLinkLogo = styled(Link)`
    color: #191F24;
    display: flex;
    align-items: center;
    padding: 10px;
    height: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &.active {
        color: #fff;
      }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #191F24;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
 
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const SignDesign = styled.h1`
color: #47525E;
font-family: Lato, sans-serif;
font-weight:bold;
font-size: 35px;
line-height: 71px;
width: 400px;
text-align: center;
`

export const SearchBar = styled.input`
background-color: white;
border: 2px;
border-radius: 7px;
font-size: 18px;
padding: 15px;
height: 30px;
width: 300px;
align-text:center;
`
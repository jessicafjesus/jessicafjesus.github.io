import React from 'react'
import {Button} from 'react-bootstrap'
import styled from "styled-components";


const 
Museums = () => {
    return (
        <div>
           <CatStyle> Suggested Categories</CatStyle>
            <CatButton className="categoriesBtn">Modern Art</CatButton>
            <CatButton className="categoriesBtn">History</CatButton>
            <CatButton className="categoriesBtn">Science</CatButton>
        </div>
    )
}

export default Museums;

export const CatButton = styled.button`
background-color: #FFFFFF;
border: 3px solid #00A3A3;
border-radius: 6px;
padding: 20px;
left-margin:20px;
width: 194px;
height: 53px;
color: #00A3A3;
font-family: Lato, sans-serif;
font-size: 20px;
text-align: center;
cursor: pointer;
transition: all 0.5s ease-in-out;
background: url("https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638191578~hmac=b520cd6dbf76ae61d0e67b3e241c9d5c") 2px 5px no-repeat;
&:hover {
    color:#00A3A3;
    outline: auto;
    border: 3px solid #00A3A3;
    font-weight:bold;
  }
`
export const CatStyle = styled.h1`
color: #191F24;
  font-family: Lato,sans-serif;
  font-size: 23px;
  line-height: 35px;
  text-align: left;
  padding: 40px;
  font-weight: bold;`


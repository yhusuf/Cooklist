import React from 'react';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Bar() {
  return (
    <Tbar>
      <To to={'/'}>
        <GiKnifeFork/>
        <h2 className='tex'>cookList</h2>
        </To>
    </Tbar>
  )
}
const Tbar = styled.div`
color:black;
display: flex;
margin: 16px;
font-size: 25px;
h2{
  position: relative;
  top: -28px;
  margin-bottom: 2px;
  font-family: 'Lobster Two', cursive;
  font-size: 25px;
}
@media only screen and (max-width: 470px){
margin: 10px;
}
`
const To = styled(NavLink)`
    text-decoration: none;
    color: black;
    display: flex;
    @media only screen and (max-width: 470px){
      position: relative;
      top: 15px;
    }
`
export default Bar
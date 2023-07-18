import React from 'react';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Bar() {
  return (
    <To to={'/'}>
    <Tbar>
        <GiKnifeFork/>
        <h2 className='tex'>cookList</h2>
    </Tbar>
    </To>
  )
}
const Tbar = styled.div`
color:black;
display: flex;
margin: 17px;
font-size: 25px;
h2{
  position: relative;
  top: -28px;
  margin-bottom: 2px;
  font-family: 'Lobster Two', cursive;
  font-size: 25px;
}
@media only screen and (max-width: 600px){
  margin: 13px;
}
`
const To = styled(NavLink)`
    text-decoration: none;
`
export default Bar
import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;

`
const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 0.1rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);
h4{
        color: white;
        font-size: 0.8rem;
    }
svg{
        color: white;
        font-size: 1.5rem;
    }   
&.active{
        background: linear-gradient(to right,#df6c6c,#40d7e2);
        svg{
            color: white;
        }
    }
@media only screen and (max-width: 600px){
    transform: scale(0.7);
    margin-right: 10px;
}
`

export default Category
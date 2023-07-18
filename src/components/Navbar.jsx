import React, {useState} from 'react';
import styled from 'styled-components';
import { GiKnifeFork, GiNoodles, GiFireBowl , GiFruitBowl} from 'react-icons/gi';
import {IoIceCreamSharp} from 'react-icons/io5';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Link,NavLink} from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);
  const [thai, setThai] = useState(false);

  const toggleActive = () => {
    setActive(!active);
    setThai(!thai);
    };
  return (
    <Bar>
      <nav id='Navi'>
            <div id="nav-top">
              <Nav>
              <h3 className='Gi'>
                <div>
                  <GiKnifeFork/> 
                </div>
                  cookList
              </h3>
              </Nav>
                <div id="nav-icon" onClick={toggleActive}>
                  <BsFillMenuButtonWideFill/>
                </div>
            </div>
              <ul id="nav-links" className={active ? 'active' : ''}>
                  <NavLink to={'/veggie/Vegetarian'}><li id='nav-icco' className={active? 'active' : ''}><div><GiFruitBowl/></div>Vegitarian picks</li></NavLink>
                  <NavLink to={'/random'}><li id='nav-icco' className={active? 'active' : ''}><div><GiFireBowl/></div>Random Picks</li></NavLink>
                  <NavLink to={'/dessert/Dessert'}><li id='nav-icco'className={active? 'active' : ''}><div><IoIceCreamSharp/></div>Dessert Picks</li></NavLink>
                  <NavLink to={'/cuisine/African'}><li id='nav-ico' className={active? 'active' : ''}><div className='sv'><GiNoodles/></div>African</li></NavLink>   
              </ul>
        </nav>
      </Bar>
  )
}

const Bar = styled.div`
#Navi {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
}
#nav-icon{
  display: none;
}
#nav-links #nav-ico{
  display: none;
}
#nav-links #nav-icco{
  svg{
    display: none;
  }
 
}

 #nav-links li {
  display: flex;
  color: white;
  text-align: center;
  padding: 10px 12px;
  border-radius: 5px;
  text-decoration: none;
  float: right;
  position: relative;
  top: -80px;
  flex-wrap: wrap;
  margin-left: 9px;
  cursor: pointer;
  font-weight: bold;
  
  
}

#nav-links li:hover {
  background-color: white;
  color: black;
}

#nav-top h3 {
  display: flex;
  align-items: center;
  color: whitesmoke;
  margin-left: 9px;
  margin-bottom: 20px;
  margin-left: 40px;
  font-size: 25px;
  position: relative;
  font-family: 'Lobster Two', cursive;
  text-decoration: none;
  cursor: pointer;
  svg {
    font-size: 30px;
    color: #9b9be9;
    background-color:transparent;
    padding: 10px;
    border-radius: 5px;
  }
}

@media screen and (min-width:480px) {
    ul li{
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 600px) {
  #nav-icon {
    display: flex;
    float: right;
    position: relative;
    top: -75px;
    font-size: 30px;
    color: #9b9be9;
    background-color:transparent;
    padding: 10px;
    border-radius: 6px;

  }
  #nav-links{
  position: fixed;
  top: 50px;
  right: -200px;
  width: 200px;
  height: 100%;
  background-color: #292525;
  transition: right 0.3s ease-in-out;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  border-radius: 9px;
}

#nav-top {
  background-color: #292525;
  position: relative;
  top: -26px;
}
#nav-links.active {
  right: 0;
}
#nav-links #nav-ico{
  display: flex;
  transition: right 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 20px;
    color: white;
    margin-right: 12px;
  }
}

#nav-links #nav-ico:hover{
  background-color: #333;
  color: whitesmoke;
}
#nav-links #nav-icco{
   display: flex;
   color: white;
   svg {
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    color: white;
    margin-right: 12px;
   }

}

}


#nav-links li {
  margin: 10px 0;
  text-align: center;
  cursor: pointer;
}

#nav-links li {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s;

  
}
#nav-top .Gi{
  position: relative;
  right: 35px;
}
`
const Nav = styled(Link)`
  text-decoration: none;
`

export default Navbar
import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Main.jpg';
import Search from '../components/search';
import Nav from '../components/Navbar';
import Chatmessage from '../components/Chatmessage';



function Home() {
 
  
  return (
    <Hpage>
      <Nav/>
      <Text>
        <h3>Elevate your cooking game while taking your taste buds on a journey.</h3>
        <Search/> 
        <div className='rand'>
          <Chatmessage/>
        </div>
      </Text>
    </Hpage>
  )
}

const Hpage = styled.div`
background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${Image});
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed;
align-items: center;
justify-content: center;
/* position: relative; */


`
const Text = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 12vh ;
  flex-wrap: wrap;

h3 {
  font-size: 30px;
  text-transform: uppercase;
  font-style: bold;
  color: #ffffff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  width: 760px;
}
svg{
  font-size: 20px;
}
.rand{
  color: #bed8ec;
  font-size: small;
  align-self: flex-end;
  width: 100%;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  h3{
    position: relative;
    top: -40px;
  }
  .search{
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
}

`

export default Home;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Category from '../components/Category';

function Navlink() {
  const [navlink ,setNavlink] = useState([]);
  let params = useParams();
  const getNavlink = async (name) =>{
      const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=12`);
      const recipes = await data.json();
      setNavlink(recipes.results);
      console.log(recipes);
  };
  useEffect(() =>{
    getNavlink(params.type)
  },[params.type]);
  return (
    <Body>
  <All>
    <Category/>
    <h2>
     Our {params.type} pick
    </h2>
    <Grid>
      {navlink.map((item) =>{
        return(
          <Card
          animate={{opacity:1}}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration:0.5}}
          key={item.id}>
          <Lin to={'/recipe/' + item.id}>
            <img src={item.image} alt=''/>
            <h4>{item.title}</h4>
          </Lin>
          </Card>
          
        )
      })}
    </Grid>
    </All>
    </Body>
  )
}
const Body = styled.body`
margin: 0% 20%;`
const All = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
}`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
`
const Card = styled(motion.div)`
  img{
    width: 100%;
    border-radius: 3rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding:1rem ;
  }
  body{
  margin:0% 20%;
 }
`
const Lin= styled(Link)`
color: black
`
export default Navlink
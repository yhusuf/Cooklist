import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Category from '../components/Category';
import Random from '../components/Random';
import Search from '../components/search';
import Bar from '../components/Bar';
function Dessert() {
  const [dessert ,setDessert] = useState([]);
  let params = useParams();
  const getDessert = async (name) =>{
      const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}&number=12`);
      const recipes = await data.json();
      setDessert(recipes.results);
      console.log(recipes)
  };
  useEffect(() =>{
    getDessert(params.type)
    console.log(params.type)
  },[params.type]);
  return (
    <Body>
  <All>
    <Bar/>
    <div className="see">
    <Search/>
    </div>
    <Category/>
    <Random/>
    <h2>
     Our {params.type} pick
    </h2>
    <Grid
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}>
      {dessert.map((item) =>{
        return(
          <Card key={item.id}>
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
margin: 0% 20%;
@media only screen and (max-width: 600px){
  margin-left: 15px;
  margin-right: 15px;
}`
const All = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
}
h2{
  font-size: 1.5rem;
    color: rgb(56,56,56);
    line-height: 1.5rem;
    margin: 2rem 0rem;
}
.see{
  align-items: center;
  justify-content: center;
  display: flex;
}
@media only screen and (max-width: 600px){
  .see .search{
    top: 0px;
    left:2px;
   width: 100%;
  }
}`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  @media only screen and (max-width: 600px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 50px;
  }

`
const Card = styled.div`
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
export default Dessert
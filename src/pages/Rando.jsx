import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
import Search from '../components/search';
import Bar from '../components/Bar';
// import Content from '../components/Content';
function Random() {
  const [random ,setRandom] = useState([]);
  const getCuisine = async () =>{
      const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
      const data = await api.json();
      setRandom(data.recipes);
  };
  useEffect(() =>{
    getCuisine()
    console.log()
  },[]);
  return (
    <Body>
      <Bar/>
   <All>
    <div className="see">
    <Search/>
    </div>
    <Category/>
    <h2>
     Our Random pick
    </h2>
    <Grid
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}>
      {random.map((recipe) =>{
        return(
            <Card key={recipe.id}>
            {/* <Content/> */}
           <Lin to={'/recipe/' + recipe.id}>
           <img src={recipe.image} alt=''/>
            <h4>{recipe.title}</h4>
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
}
`

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
export default Random
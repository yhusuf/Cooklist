import React, { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/Category';
import Search from '../components/search';
import Bar from '../components/Bar';
function Searched() {
  const [searched,setSearched] = useState([]);
  let params = useParams();
  const getSearched= async (name) =>{
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`);
      const recipes = await data.json();
      setSearched(recipes.results)
    };
    useEffect( ()=>{
      getSearched(params.search)
    },[params.search]);

  return (
    <Body>
      <All>
        <Bar/>
        <div className="see">
          <Search/>
        </div>
        <Category/>
        <h2>{params.search} result</h2>
      <Grid>
      {searched.map((item)=>{
    return(
      <Card key={item.id}>
        <Lin to={'/recipe/' + item.id}>
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
        </Lin>
      </Card>
    )
  })}
    </Grid>
      </All>
    </Body>
    
  )
};
const Grid = styled.div`
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
const Body = styled.body`
margin: 0% 20%;
@media only screen and (max-width: 600px){
  margin: 0;
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
const Lin= styled(Link)`
color: black
`


export default Searched;
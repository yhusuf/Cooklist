import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import  Search  from '../components/search';
import Category from '../components/Category';
import Bar from '../components/Bar';


function Recipe() {
    const [details,setDetails] = useState({});
    let params = useParams();
    const [activeTab,setActiveTab] = useState('instructions');
    const fetchDetails= async () =>{
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData)
        console.log(detailData);
      };
      useEffect( ()=>{
        fetchDetails()
      },
      //eslint-disable-next-line
      [params.id]);
  return (
  <Body>
     <Bar/>
    <All>
      <div className='see'>
      <Search/>
      </div>
      <div className="cat">
      <Category/>
      </div>
    <Detwrapper>
      <div className="container">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <div className="btn">
        <Button className={activeTab=== 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab=== 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        </div>
        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
        </div> )}
        {
          activeTab === 'ingredients' && (
      <ul>
        {details.extendedIngredients.map((ingredient) =>
        <li key={ingredient.id}>{ingredient.original}</li>)}
      </ul>
          )
        }  
      </Info>
      </div>
    </Detwrapper>
    </All>
  </Body>

  )
}
const Body = styled.body`
margin: 0% 15%;
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
.tex{
  position: relative;
  top: -5px;
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
@media only screen and (max-width: 600px){
  .tex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cat{
    margin-top: 10px;
  }
}`

const Detwrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  h2{
    margin-bottom: 2rem;
  }
 .container{
    display: flex;
  }
  li{
    font-size:15px;
    line-height:25px;
  }
  ul{
    margin-top: 2rem;
  }
  .active{
    background: linear-gradient(to right,#df6c6c,#40d7e2);
    color: white;
  }
  img{
    border-radius: 20px;
  }
  .btn{
    display: flex;
  }
  @media only screen and (max-width: 600px) {
    .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  }
 img{
 max-width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 }
.btn{
 display: flex;
 margin: 10px;
 }
}
`
const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
@media only screen and (max-width: 600px){
 margin: 4px;
}
`
const Info = styled.div`
  margin-left: 40px;
  @media only screen and (max-width: 600px){
    margin: 0;
    .ingredients ul{
      text-decoration: none;
    }
  }
`
export default Recipe
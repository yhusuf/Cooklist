import React, {useState} from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Search(){ 
const [input, setInput]= useState("");
const navigate = useNavigate();
const submitHandler = (e)=>{
    e.preventDefault();
    navigate('/searched/' + input);
};
  return (
        <Searchstyle onSubmit={submitHandler}>
        <div className='search' >
            <FaSearch></FaSearch>
            <input className='inpt' onChange={(e) => setInput(e.target.value)} 
            value={input}
            type="text" />
        </div>    
        </Searchstyle>
    
  );
}

const Searchstyle = styled.form`
    margin: 0rem 20rem;
    div {
        width:  100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #31313131);
        font-size: 20px;
        padding: 1rem 3rem;
        border: none;
        border-radius: 10px;
        outline: none;
        width: 500px;
        color: white;
        
    }
    svg{
        position: absolute;
        top: 55%;
        left: 0%;
        transform: translate(10%, -50%);
        color: black;
    }
    @media screen and (max-width: 480px){
       div {
        width: 250px;
        max-width: 100%;
        right: 50px;
       }
       input{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        max-width: 100%; 
       }
    }
    @media only screen and (max-width: 600px) {
      .search{
           position: relative;
            top: -49px;
        
        }
    }
    
`
export default Search;